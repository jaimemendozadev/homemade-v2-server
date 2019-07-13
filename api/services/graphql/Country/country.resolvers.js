const {findCountry, metroAreas} = require('./queries');
const {createCountry} = require('./mutations');

module.exports = {
  Query: {
    findCountry,
  },
  Mutation: {
    createCountry,
  },
  Country: {
    metroAreas,
  },
};
