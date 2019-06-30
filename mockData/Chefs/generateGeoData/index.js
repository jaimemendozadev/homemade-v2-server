const async = require('async');
const fetchSaveGeoData = require('./fetchSaveGeoData');

const generateGeoData = async chefPayload => {
  async.mapSeries(chefPayload, fetchSaveGeoData, err => {
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

module.exports = generateGeoData;
