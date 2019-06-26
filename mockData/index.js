require('dotenv').load();
const {clearDatabase} = require('./utils/database');
const UserData = require('../mockJSON/Users.json');
const generateMockDishes = require('./utils/generateMockDishes');
const generateMockOrders = require('./utils/generateMockOrders');
const generateMockReviews = require('./utils/generateMockReviews');
const generateChefUpdates = require('./utils/generateChefUpdates');
const generateUserUpdates = require('./utils/generateUserUpdates');
const generateMockChefs = require('./utils/generateMockChefs');
const performUpdates = require('./utils/performUpdates');
const {User, Dish, Order, Review, Chef} = require('../api/DB/Models');

const initiateDBSeeding = async dbConnectCallback => {
  // Insert the Users in the DB
  const Users_DB_Result = await User.insertMany(UserData);

  // Use half of existing users and make them chefs
  const ChefsPayload = generateMockChefs(Users_DB_Result);

  const Chefs_DB_Result = await Chef.insertMany(ChefsPayload);

  // Create a set of all the chefs in mock data
  const filteredChefs = new Set();
  Chefs_DB_Result.forEach(chef => filteredChefs.add(chef._id));

  // Create a filtered array of Users that are not chefs
  const filteredUsers = Users_DB_Result.filter(
    user => !filteredChefs.has(user._id),
  );

  // Create New Dishes and attach Chef IDs to Dishes
  const DishPayload = generateMockDishes(50, Chefs_DB_Result);

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

  const convertedChefsSet = Array.from(filteredChefs);

  const ChefUpdates = generateChefUpdates(
    allReviews,
    Dishes_DB_Result,
    convertedChefsSet,
  );

  const UserUpdates = generateUserUpdates(Chefs_DB_Result);

  performUpdates([...ChefUpdates, ...UserUpdates], dbConnectCallback);
};

clearDatabase(initiateDBSeeding);
