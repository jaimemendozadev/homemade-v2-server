const async = require('async');
const {generateChefUpdates} = require('../Chefs');
const {generateUserUpdates} = require('../Users');
const {Chef, User} = require('../../api/DB/Models');

const _performUpdate = async updatedInfo => {
  const {_id, payload, type} = updatedInfo;

  if (type === 'Chef') {
    await Chef.updateOne({_id}, payload);
  } else {
    await User.updateOne({_id}, payload);
  }
};

const _saveUpdatesInDB = (updatesPayload, callback) => {
  async.mapSeries(updatesPayload, _performUpdate, err => {
    let callbackMSG = 'DB successfully finished seeding!';

    if (err) {
      callbackMSG =
        'There was an error updating the chefs with reviews and dish data.';

      console.log('err is ', err);
    } else {
      console.log('Chefs updated in DB with reviews and dishes.');
    }

    callback(callbackMSG);
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

  _saveUpdatesInDB(UpdatesPayload, dbConnectCallback);
};

module.exports = performUpdates;
