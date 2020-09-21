import React, { useState, useEffect, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import './restaurant.scss';
import { GlobalContext } from '../GlobalState';
import { loadRestaurantPage } from '../../API/loadData';
import Loading from '../Loading';
import RestaurantInfo from '../RestaurantInfo';
import RestaurantPageNav from '../RestaurantPageNav';
import DishSections from '../DishSections';

const RestaurantPage = () => {
  const { isLoading, setIsLoading } = useContext(GlobalContext);
  const [restaurant, setRestaurant] = useState({});
  const history = useHistory();
  const { currentUuid } = useParams();

  useEffect(() => {
    setIsLoading(true);
    loadRestaurantPage(currentUuid)
      .then(data => setRestaurant(prepareRestaurant(data.data)))
      .catch(() => history.push('/404'))
      .finally(() => setIsLoading(false));

    window.scrollTo(0, 0);
  }, []);

  // Neccassary dish objects are already included into each section
  const prepareRestaurant = rawData => ({
    ...rawData,
    sections: rawData.sections.map(section => ({
      ...rawData.sectionsMap[section],
      items: rawData.sectionsMap[section].itemUuids
        .map(itemUuid => rawData.entitiesMap[itemUuid]),
    })),
  });

  const restaurantPageNavProps = () => ({
    titles: restaurant.sections
      ? restaurant.sections.map(({ uuid, title }) => ({
        uuid, title,
      }))
      : [],
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main className="restaurant">
      <RestaurantInfo
        title={restaurant.title}
        categories={restaurant.categories}
        address={restaurant.location && restaurant.location.streetAddress}
        image={restaurant.heroImageUrls && restaurant.heroImageUrls[3].url}
      />
      <div className="restaurant__width">
        <RestaurantPageNav
          {...restaurantPageNavProps()}
        />
        <DishSections
          sections={restaurant.sections || []}
        />
      </div>
    </main>
  );
};

export default RestaurantPage;
