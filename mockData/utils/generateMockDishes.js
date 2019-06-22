const {generateSingleDish} = require('../Dishes');

// Create Users File and Seed DB
const generateMockDishes = (numOfDishes = 30, chefIDsArray) => {
  const dishesPayload = [];

  for (let i = 0; i < numOfDishes; i++) {
    const randomID = Math.floor(Math.random() * chefIDsArray.length);
    const chefID = chefIDsArray[randomID];

    dishesPayload.push(generateSingleDish(chefID));
  }

  return dishesPayload;
};

module.exports = generateMockDishes;
