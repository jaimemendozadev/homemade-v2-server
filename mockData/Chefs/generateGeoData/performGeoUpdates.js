const getGoogleCoords = require('./getGoogleCoords');
const parseAddress = require('./parseAddress');
const parseCountryMetro = require('./parseCountryMetro');
const neighborhoodUpdate = require('./neighborhoodUpdate');
const metroAreaUpdate = require('./metroAreaUpdate');

const performGeoUpdates = async chef => {
  const {_id} = chef;

  const googleResults = await getGoogleCoords(chef);

  // Parse the Chef's Address
  const parsedChefAddres = parseAddress(googleResults);

  // Parse the Chef's Metro/Country Info
  const {Country, MetroArea} = parseCountryMetro(googleResults);

  console.log(Country);
  console.log(parsedChefAddres);
  console.log(_id);

  // Use Chef Address Info to Create/Save Neighborhood and add Chef ID
  const chefNeighborhood = parsedChefAddres.city;

  const neighborhoodID = await neighborhoodUpdate(chefNeighborhood, _id);

  // Use new Neighborhood ID and Chef ID to create/update Metro Area
  const metroAreaID = await metroAreaUpdate(MetroArea, neighborhoodID, _id);

  console.log(metroAreaID);

  // Use new Metro Area ID to create/update Country

  // Last, Update Chef with Address Info
};

module.exports = performGeoUpdates;
