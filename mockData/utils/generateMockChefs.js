const {generateSingleChef} = require('../Chefs');

const generateMockChefs = users => {
  const numOfChefs = Math.floor(users.length / 2);

  const chefsArray = [];

  for (let i = 0; i < numOfChefs; i++) {
    const currentUser = users[i];

    chefsArray.push(generateSingleChef(currentUser));
  }

  return chefsArray;
};

module.exports = generateMockChefs;
