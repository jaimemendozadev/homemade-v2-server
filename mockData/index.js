require('dotenv').load();
const {clearDatabase} = require('./utils/database');
const UserData = require('../mockJSON/Users.json');
const generateMockDishes = require('./utils/generateMockDishes');
const generateMockOrders = require('./utils/generateMockOrders');
const {User, Dish} = require('../api/DB/Models');

const initiateDBSeeding = async () => {
  // Insert the Users in the DB
  const Users_DB_Result = await User.insertMany(UserData);

  // Get list of Chef Users
  const filteredChefs = Users_DB_Result.filter(user => user.isChef === true);

  // Get list of Regular Users
  const filteredUsers = Users_DB_Result.filter(user => user.isChef === false);

  // Create New Dishes and attach Chef IDs to Dishes
  const DishPayload = generateMockDishes(50, filteredChefs);

  // Insert Dishes in the DB
  const Dishes_DB_Result = await Dish.insertMany(DishPayload);

  const OrderPayload = generateMockOrders(Dishes_DB_Result, filteredUsers, 30);

  console.log("OrderPayload ", OrderPayload)
};

clearDatabase(initiateDBSeeding);
