const fetch = require('node-fetch');
const {Chef} = require('../../../api/DB/Models');
const {GOOGLE_GEOCODE_URL, GOOGLE_MAPS_APIKEY} = process.env;

const getGoogleCoords = async chefID => {
  const foundDBResult = await Chef.find({_id: chefID});
  const foundChef = foundDBResult.pop();

  const {
    location: {geo_lat, geo_lng},
  } = foundChef;

  const reqURL = `${GOOGLE_GEOCODE_URL}${geo_lat},${geo_lng}&key=${GOOGLE_MAPS_APIKEY}`;

  const googleResponse = await fetch(reqURL).then(response => response.json());

  const {results} = googleResponse;

  return results;
};

module.exports = getGoogleCoords;
