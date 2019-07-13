const {neighborhoods, chefs, findMetroArea} = require('./queries');

module.exports = {
  Query: {
    findMetroArea
  },
  MetroArea: {
    neighborhoods,
    chefs,
  },
};
