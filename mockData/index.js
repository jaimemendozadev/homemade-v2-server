require('dotenv').load();
const {clearDatabase} = require('./utils/database');
const UserData = require('../mockJSON/Users.json');
const generateMockDishes = require('./utils/generateMockDishes');
const generateMockOrders = require('./utils/generateMockOrders');
const generateMockReviews = require('./utils/generateMockReviews');
const generateChefUpdates = require('./utils/generateChefUpdates');
const updateChefs = require('./utils/updateChefs');
const {User, Dish, Order, Review} = require('../api/DB/Models');

const initiateDBSeeding = async dbConnectCallback => {
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

  // Create Payload of Orders with linked chef/user info and tabulated totals
  const PastOrders = generateMockOrders(
    Dishes_DB_Result,
    filteredUsers,
    30,
    false,
  );

  const PastOrders_DB_Result = await Order.insertMany(PastOrders);

  // Generate reviews for past orders
  const PastReviwesPayload = generateMockReviews(PastOrders_DB_Result);

  const PastReviews_DB_Result = await Review.insertMany(PastReviwesPayload);

  // Generate Orders and Reviews with current date timestamp
  const CurrentOrders = generateMockOrders(
    Dishes_DB_Result,
    filteredUsers,
    30,
    true,
  );

  const CurrOrders_DB_Result = await Order.insertMany(CurrentOrders);

  const CurrReviewsPayload = generateMockReviews(CurrOrders_DB_Result);

  const CurrReviews_DB_Result = await Review.insertMany(CurrReviewsPayload);


  // Gather all the reviews and chef dishes for updating chefs in DB
  const allReviews = [...PastReviews_DB_Result, ...CurrReviews_DB_Result];

  const updatesPayload = generateChefUpdates(allReviews, Dishes_DB_Result, filteredChefs);


  updateChefs(updatesPayload, dbConnectCallback);

};

clearDatabase(initiateDBSeeding);
