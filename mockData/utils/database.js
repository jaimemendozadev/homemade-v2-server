const mongoose = require('mongoose');
const {
  User,
  Dish,
  Order,
  Review,
  Chef,
  Neighborhood,
} = require('../../api/DB/Models');
mongoose.Promise = global.Promise;
const {DB_URL} = process.env;

mongoose.connect(DB_URL, {useNewUrlParser: true});
const db = mongoose.connection;

const closeDB = (msg = '') => {
  db.close(() => {
    console.log(msg);
    console.log('The connection to the database has been terminated.');
  });
};

const clearDatabase = callback => {
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));

  db.on('connected', async () => {
    console.log('Successfully connected to DB!');

    // Remove all documents from each Model
    // .remove() deprecated
    await Dish.deleteMany();
    await Order.deleteMany();
    await User.deleteMany();
    await Review.deleteMany();
    await Chef.deleteMany();
    await Neighborhood.deleteMany();
    await callback(closeDB);
  });
};

module.exports = {
  db,
  clearDatabase,
};
