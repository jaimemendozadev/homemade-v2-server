require('dotenv').load();
// const {db, clearDatabase} = require('./database');

// const writeFileToDisk = require("./generateFiles.js");
// const {generateSingleUser} = require('./Users');
// const {generateSingleDish} = require('./Dishes');

// const {Dishes, Orders, Users} = require('../api/DB/Models');
// const DishData = require('./Dish.json');
// const OrderData = require('./Order.json');




/*


// Create Users File and Seed DB
const createUsersPayload = async() => {

  const filePath = path.join(__dirname, "../mockJSON/Users.json");
  const payloadArray = [];

  for (let i = 0; i < 30; i++) {
    payloadArray.push(generateSingleUser());
  }

  await writeFileToDisk(filePath, payloadArray);
}














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

  // Create Users JSON
  await createUsersPayload();

  const UserData = require('../mockJSON/Users.json');


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
*/
