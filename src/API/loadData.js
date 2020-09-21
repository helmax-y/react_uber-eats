const restaurantsURL = `
https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants`;
const menuItemsURL = `
https://mate-uber-eats-api.herokuapp.com/api/v1/menu-items`;

export const loadRestaurants = () => fetch(restaurantsURL)
  .then(response => response.json());

export const loadRestaurantPage = uuid => fetch(`${restaurantsURL}/${uuid}`)
  .then(response => response.json());

export const loadMenuItems = uuid => fetch(`${menuItemsURL}/${uuid}`)
  .then(response => response.json());
