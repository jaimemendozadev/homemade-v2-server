const mongoose = require('mongoose');
const {Dish, Order, User} = require('../api/DB/Models');

mongoose.Promise = global.Promise;
const {DB_URL} = process.env;

mongoose.connect(DB_URL, {useNewUrlParser: true});
const db = mongoose.connection;

const clearDatabase = callback => {
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));

  db.on('connected', async () => {
    console.log('Successfully connected to DB!');

    // Remove all documents from each Model
    // .remove() deprecated
    await Dish.deleteMany();
    await Order.deleteMany();
    await User.deleteMany();
    
    callback();

  });

};

module.exports = {
  db,
  clearDatabase,
};
