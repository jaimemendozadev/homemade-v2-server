const mongoose = require('mongoose');

const bulkDBQuery = async (arrayOfIDs, Model) => {
  const findPayload = arrayOfIDs.map(_id => mongoose.Types.ObjectId(_id));

  const queriedDishes = await Model.find({_id: {$in: findPayload}});

  return queriedDishes;
};

module.exports = {
  bulkDBQuery,
};
