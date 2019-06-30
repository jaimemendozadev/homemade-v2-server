const fetch = require('node-fetch');
const parseAddress = require('./parseAddress');
const parseCountryMetroInfo = require('./parseCountryMetroInfo');
// const { MetroArea, Country, Neighborhood, Chef} = require('../../../api/DB/Models');

const {GOOGLE_GEOCODE_URL, GOOGLE_MAPS_APIKEY} = process.env;

const fetchSaveGeoData = async chef => {
  const {
    _id,
    location: {geo_lat, geo_lng},
  } = chef;
  const reqURL = `${GOOGLE_GEOCODE_URL}${geo_lat},${geo_lng}&key=${GOOGLE_MAPS_APIKEY}`;

  const googleResponse = await fetch(reqURL).then(response => response.json());

  const {results} = googleResponse;

  // Parse the Chef's Address
  const parsedChefAddres = parseAddress(results);

  // Parse the Chef's Metro/Country Info
  const metroCountryInfo = parseCountryMetroInfo(results);

  console.log(parsedChefAddres);
  console.log(metroCountryInfo);
  console.log(_id);

  // Use Chef Address Info to Create/Save Neighborhood and add Chef ID

  // const options = {lean: true, upsert: true}

  // const SavedNeighborhood = Neighborhood.findOneAndUpdate({_id}, )

  // Use new Neighborhood ID and Chef ID to create/update Metro Area

  // Use new Metro Area ID to create/update Country

  // Last, Update Chef with Address Info
};

module.exports = fetchSaveGeoData;
