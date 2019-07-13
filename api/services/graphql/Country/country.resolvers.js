const {findCountry, metroAreas} = require('./queries');

module.exports = {
  Query: {
    findCountry
  },
  Country: {
    metroAreas,
  },
};
