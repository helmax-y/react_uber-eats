import React, { useState, useEffect, useContext } from 'react';

import './time.scss';
import { loadRestaurants } from '../../API/loadData';
import { GlobalContext } from '../GlobalState';
import RestaurantCard from '../RestaurantCard';
import Grid from '../common/Grid';
import Loading from '../Loading';

const Restaurants = () => {
  const {
    restaurantsQuery,
    setRestaurantsQuery,
    isLoading,
    setIsLoading,
  } = useContext(GlobalContext);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    loadRestaurants().then((data) => {
      setRestaurants(data.data.feedItems
        .map(item => data.data.storesMap[item.uuid]));
      setIsLoading(false);
    });

    window.scrollTo(0, 0);

    return () => {
      setRestaurantsQuery('');
    };
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  const filteredRestaurants = restaurants
    .filter(({ title, categories }) => title.toLowerCase()
      .includes(restaurantsQuery)
      || categories.some(category => category.toLowerCase()
        .includes(restaurantsQuery)));

  if (filteredRestaurants.length === 0) {
    return <p>There is no such restaurant. Please try another keyword</p>;
  }

  return (
    <Grid as="main">
      {filteredRestaurants.map(({
        uuid,
        heroImageUrl,
        title,
        categories,
        etaRange: { text },
      }) => (
        <RestaurantCard
          key={uuid}
          uuid={uuid}
          image={heroImageUrl}
          title={title}
          categories={categories}
          time={text}
        />
      ))}
    </Grid>
  );
};

export default Restaurants;
