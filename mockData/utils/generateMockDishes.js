const {generateSingleDish} = require('../Dishes');

// Create Users File and Seed DB
const generateMockDishes = (numOfDishes = 50, chefsArray) => {
  const dishesPayload = [];

  for (let i = 0; i < numOfDishes; i++) {
    const randomID = Math.floor(Math.random() * chefsArray.length);
    const chefID = chefsArray[randomID]._id;

    dishesPayload.push(generateSingleDish(chefID));
  }

  return dishesPayload;
};

module.exports = generateMockDishes;
