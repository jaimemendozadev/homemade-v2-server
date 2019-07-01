const async = require('async');
const performGeoUpdates = require('./performGeoUpdates');

const generateGeoData = async (chefIDsArray, doneCallback) => {
  async.mapSeries(chefIDsArray, performGeoUpdates, err => {
    let callbackMSG =
      'Successfully updated DB with GeoData. DB successfully finished seeding!';

    if (err) {
      callbackMSG =
        'There was an error updating the chefs with address info from Google.';

      console.log(err);
      doneCallback(callbackMSG);
    } else {
      doneCallback(callbackMSG);
    }
  });
};

module.exports = generateGeoData;
