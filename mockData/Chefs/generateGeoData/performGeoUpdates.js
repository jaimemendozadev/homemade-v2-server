const getGoogleCoords = require('./getGoogleCoords');
const parseAddress = require('./parseAddress');
const parseCountryMetro = require('./parseCountryMetro');
const neighborhoodUpdate = require('./neighborhoodUpdate');
const metroAreaUpdate = require('./metroAreaUpdate');
const countryUpdate = require('./countryUpdate');
const {Chef} = require('../../../api/DB/Models');
const performGeoUpdates = async chef => {
  const {_id} = chef;

  const googleResults = await getGoogleCoords(chef);

  // Parse the Chef's Address
  const parsedChefAddres = parseAddress(googleResults);

  // Parse the Chef's Metro/Country Info
  const {Country, MetroArea} = parseCountryMetro(googleResults);

  // Use Chef Address Info to Create/Save Neighborhood and add Chef ID
  const chefNeighborhood = parsedChefAddres.city;

  const neighborhoodID = await neighborhoodUpdate(chefNeighborhood, _id);

  // Use new Neighborhood ID and Chef ID to create/update Metro Area
  const metroAreaID = await metroAreaUpdate(MetroArea, neighborhoodID, _id);

  // Use new Metro Area ID to create/update Country
  await countryUpdate(Country, metroAreaID);

  // Finally, Update Chef with Address Info
  const updatedChef = await Chef.findByIdAndUpdate(
    _id,
    {address: parsedChefAddres},
    {new: true},
  );

  return updatedChef;
};

module.exports = performGeoUpdates;
