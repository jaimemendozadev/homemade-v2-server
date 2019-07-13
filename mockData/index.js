require('dotenv').config();
const {clearDatabase} = require('./utils/database');
const UserData = require('../mockJSON/Users.json');

const {createSaveChefsInDB} = require('./Chefs');
const {createSaveDishesInDB} = require('./Dishes');
const {createSaveOrdersInDB} = require('./Orders');
const {createSaveReviewsInDB} = require('./Reviews');
const filterChefsUsers = require('./utils/filterChefsUsers');
const performUpdates = require('./utils/performUpdates');
const {User} = require('../api/DB/Models');

const initiateDBSeeding = async dbConnectCallback => {
  // Insert the Users in the DB
  const Users_DB_Result = await User.insertMany(UserData);

  // Get an array of Chefs half the size of created Users
  const Chefs_DB_Result = await createSaveChefsInDB(Users_DB_Result);

  // Get a filtered set of Chefs, a filtered array of Users
  const [filteredChefs, filteredUsers] = filterChefsUsers(
    Chefs_DB_Result,
    Users_DB_Result,
  );

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
  const PastReviews_DB_Result = await createSaveReviewsInDB(
    PastOrders_DB_Result,
  );

  // Generate Orders and Reviews with current date timestamp
  const CurrOrders_DB_Result = await createSaveOrdersInDB(
    Dishes_DB_Result,
    filteredUsers,
    30,
    true,
  );

  const CurrReviews_DB_Result = await createSaveReviewsInDB(
    CurrOrders_DB_Result,
  );

  const allReviews = [...PastReviews_DB_Result, ...CurrReviews_DB_Result];

  // Gather all the reviews and chef dishes for updating chefs in DB
  performUpdates(
    allReviews,
    Dishes_DB_Result,
    Chefs_DB_Result,
    filteredChefs,
    dbConnectCallback,
  );
};

clearDatabase(initiateDBSeeding);
