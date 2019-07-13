const async = require('async');
const {generateChefUpdates} = require('../Chefs');
const {generateUserUpdates} = require('../Users');
const generateGeoData = require('../Chefs/generateGeoData');
const {Chef, User} = require('../../api/DB/Models');

const performUpdate = async updatedInfo => {
  const {_id, payload, type} = updatedInfo;

  if (type === 'Chef') {
    await Chef.updateOne({_id}, payload);

    return _id;
  } else {
    await User.updateOne({_id}, payload);
  }
};

const saveUpdatesInDB = (updatesPayload, callback) => {
  async.mapSeries(updatesPayload, performUpdate, async (err, results) => {
    let callbackMSG = 'Chefs updated in DB with reviews and dishes.';

    if (err) {
      callbackMSG =
        'There was an error updating the chefs with reviews and dish data.';

      console.log(`${callbackMSG} `, err);
    } else {
      console.log(callbackMSG);
      console.log('About to Update DB with GeoData.');
      const chefIDs = results.filter(id => id !== undefined);

      await generateGeoData(chefIDs, callback);
    }
  });
};

const performUpdates = (
  allReviews,
  dishesInDB,
  chefsInDB,
  filteredChefs,
  dbConnectCallback,
) => {
  const convertedChefsSet = Array.from(filteredChefs);

  const ChefUpdates = generateChefUpdates(
    allReviews,
    dishesInDB,
    convertedChefsSet,
  );

  const UserUpdates = generateUserUpdates(chefsInDB);
  const UpdatesPayload = [...ChefUpdates, ...UserUpdates];

  saveUpdatesInDB(UpdatesPayload, dbConnectCallback);
};

module.exports = performUpdates;
