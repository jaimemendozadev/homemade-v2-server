require('dotenv').load();
const {clearDatabase} = require('./utils/database');
const UserData = require('../mockJSON/Users.json');
const generateMockDishes = require('./utils/generateMockDishes');

const {User, Dish} = require('../api/DB/Models');

const initiateDBSeeding = async () => {
  // Insert the Users in the DB
  const Users_DB_Result = await User.insertMany(UserData);

  // Get list of Chef Users
  const filteredChefs = Users_DB_Result.filter(user => user.isChef);

  // Create New Dishes and attach Chef IDs to Dishes
  const DishPayload = generateMockDishes(30, filteredChefs);

  // Insert Dishes in the DB
  await Dish.insertMany(DishPayload);
};

clearDatabase(initiateDBSeeding);
