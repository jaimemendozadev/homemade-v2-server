const {neighborhoods, chefs, findMetroArea} = require('./queries');
const {createMetroArea} = require('./mutations');
module.exports = {
  Query: {
    findMetroArea,
  },
  Mutation: {
    createMetroArea,
  },
  MetroArea: {
    neighborhoods,
    chefs,
  },
};
