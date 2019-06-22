require('dotenv').load();
const {clearDatabase} = require('./database');
const UserData = require('../mockJSON/Users.json');

// const {generateSingleDish} = require('./Dishes');

const {User} = require('../api/DB/Models');
// const DishData = require('./Dish.json');
// const OrderData = require('./Order.json');

// const populateChefDishes = async (users, dishes) => {
//   let index = 0;

//   while (dishes.length) {
//     const DishIDs = dishes.splice(0, 4);
//     const UserID = users[index];

//     await User.findByIdAndUpdate(UserID, {chefDishes: DishIDs}, {new: true});

//     index = index === users.length ? 0 : index + 1;
//   }

//   return 'Finished populating ChefDishes';
// };

const initiateDBSeeding = async () => {
  const Users_DB_Result = await User.insertMany(UserData);

  console.log('Users_DB_Result is ', Users_DB_Result);
};

clearDatabase(initiateDBSeeding);
