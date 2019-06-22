require('dotenv').load();
const mongoose = require('mongoose');
const {Dishes, Orders, Users} = require('../api/DB/Models');
const DishData = require('./Dish.json');
const OrderData = require('./Order.json');
const UserData = require('./User_Smaller.json');

mongoose.Promise = global.Promise;
const {DB_URL} = process.env;

mongoose.connect(DB_URL, {useNewUrlParser: true});
const db = mongoose.connection;

const populateChefDishes = async (users, dishes) => {
  let index = 0;

  while (dishes.length) {
    const DishIDs = dishes.splice(0, 4);
    const UserID = users[index];

    await Users.findByIdAndUpdate(UserID, {chefDishes: DishIDs}, {new: true});

    index = index === users.length ? 0 : index + 1;
  }

  return 'Finished populating ChefDishes';
};

const closeDB = () => {
  db.close(() => {
    console.log('The connection to the database has been terminated.');
  });
};

const initiateDBSeeding = async () => {
  // Create dummy documents in DB
  const Users_DB_Result = await Users.insertMany(UserData);


  // const filteredChefIDs = 
  const Dishes_DB_Result = await Dishes.insertMany(DishData);
  await Orders.insertMany(OrderData);

  // Get the Users and Dishes _ids
  const UserIDs = Users_DB_Result.map(user => user._id);
  const DishIDs = Dishes_DB_Result.map(dish => dish._id);

  const populateResult = await populateChefDishes(UserIDs, DishIDs);

  console.log('poulateResult is ', populateResult);

  closeDB();
};

const runSeedDBFunc = () => {
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));

  db.on('connected', async () => {
    console.log('Successfully connected to DB!');

    // Remove all documents from each Model
    // .remove() deprecated
    await Dishes.deleteMany();
    await Orders.deleteMany();
    await Users.deleteMany();

    initiateDBSeeding();
  });
};

runSeedDBFunc();
