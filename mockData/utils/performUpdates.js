const async = require('async');
const {Chef, User} = require('../../api/DB/Models');

const _performUpdate = async updatedInfo => {
  const {_id, payload, type} = updatedInfo;

  if (type === 'Chef') {
    await Chef.updateOne({_id}, payload);
  } else {
    await User.updateOne({_id}, payload);
  }
};

const performUpdates = (updatesPayload, callback) => {
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

module.exports = performUpdates;
