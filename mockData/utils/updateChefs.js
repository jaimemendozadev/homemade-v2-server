const async = require('async');
const {User} = require('../../api/DB/Models');


const _performUpdate = async updatedInfo => {
  
  const {_id, payload} = updatedInfo;

  await User.updateOne({ _id }, payload);

}


const updateChefs = (updatesPayload, callback) => {

  async.mapSeries(updatesPayload, _performUpdate, (err) => {

    let callbackMSG = "DB successfully finished seeding!";

    if(err) {
      callbackMSG = 'There was an error updating the chefs with reviews and dish data.';

      console.log('err is ', err);

    } else {
      console.log('Chefs updated in DB with reviews and dishes.');
      
    } 
    
    callback(callbackMSG);
  });

}


module.exports = updateChefs;