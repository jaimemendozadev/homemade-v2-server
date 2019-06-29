// const async = require('async');
// const fetch = require('node-fetch');
// const parseAddress = require('./parseAddress');
// const {GOOGLE_GEOCODE_URL, GOOGLE_MAPS_APIKEY} = process.env;

// https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=YOUR_API_KEY

/*
const _fetchSaveAddress = async chef => {
  const {
    _id,
    location: {geo_lat, geo_lng},
  } = chef;
  const reqURL = `${GOOGLE_GEOCODE_URL}${geo_lat},${geo_lng}&key=${GOOGLE_MAPS_APIKEY}`;

  const googleResponse = await fetch(reqURL).then(response => response.json());

  const {results} = googleResponse;

  console.log('_id is ', _id);
  console.log('results is ', results);

  // parseAddress()
};

const getSaveAddressesInDB = async chefPayload => {
  async.mapSeries(chefPayload, _fetchSaveAddress, err => {
    let callbackMSG = 'Successfully updated Chefs with Google Addresses!';

    if (err) {
      callbackMSG =
        'There was an error updating the chefs with address info from Google.';

      console.log(`${callbackMSG}`, err);
    } else {
      console.log(callbackMSG);
    }
  });
};

*/
