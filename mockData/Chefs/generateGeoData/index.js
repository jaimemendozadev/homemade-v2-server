const async = require('async');
const performGeoUpdates = require('./performGeoUpdates');

const generateGeoData = async chefPayload => {
  const geoResults = await async.mapSeries(
    chefPayload,
    performGeoUpdates,
    (err, results) => {
      let callbackMSG = 'Successfully updated Chefs with Google Addresses!';

      if (err) {
        callbackMSG =
          'There was an error updating the chefs with address info from Google.';

        console.log(`${callbackMSG}`, err);
      } else {
        console.log(callbackMSG);

        console.log('results from geoUpdates ', results);

        return results;
      }
    },
  );

  return geoResults;
};

module.exports = generateGeoData;
