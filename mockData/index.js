require('dotenv').load();
const {clearDatabase} = require('./utils/database');
const UserData = require('../mockJSON/Users.json');

const {createSaveChefsInDB} = require('./Chefs');
const {createSaveDishesInDB} = require('./Dishes');
const {createSaveOrdersInDB} = require('./Orders');
const filterChefsUsers = require('./utils/filterChefsUsers');

const generateMockReviews = require('./utils/generateMockReviews');
const generateChefUpdates = require('./utils/generateChefUpdates');
const generateUserUpdates = require('./utils/generateUserUpdates');

const performUpdates = require('./utils/performUpdates');
const {User, Review} = require('../api/DB/Models');

const initiateDBSeeding = async dbConnectCallback => {
  // Insert the Users in the DB
  const Users_DB_Result = await User.insertMany(UserData);

  // Get an array of Chefs half the size of created Users
  const Chefs_DB_Result = await createSaveChefsInDB(Users_DB_Result);

  // Get a filtered set of Chefs, a filtered array of Users
  const [filteredChefs, filteredUsers] = filterChefsUsers(Chefs_DB_Result, Users_DB_Result);

  // Get an array of saved dishes from the DB
  const Dishes_DB_Result = await createSaveDishesInDB(Chefs_DB_Result);

  // Create Payload of Orders with linked chef/user info and tabulated totals
  const PastOrders_DB_Result = await createSaveOrdersInDB(
    Dishes_DB_Result,
    filteredUsers,
    30,
    false,
  );

  // Generate reviews for past orders
  const PastReviwesPayload = generateMockReviews(PastOrders_DB_Result);

  const PastReviews_DB_Result = await Review.insertMany(PastReviwesPayload);

  // Generate Orders and Reviews with current date timestamp
  const CurrOrders_DB_Result = await createSaveOrdersInDB(
    Dishes_DB_Result,
    filteredUsers,
    30,
    true,
  );

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
