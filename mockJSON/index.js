const DishData = require('./Dish.json');

const payload = {};

DishData.forEach(({cuisineType, dishImages}) => {
  if(!payload[cuisineType]) {
    payload[cuisineType] = [];
  }

  payload[cuisineType].push(...dishImages);
});

console.log('payload is ', payload)