require('dotenv').load();
const {clearDatabase} = require('./utils/database');
const UserData = require('../mockJSON/Users.json');

const {User} = require('../api/DB/Models');


const initiateDBSeeding = async () => {
  const Users_DB_Result = await User.insertMany(UserData);

  console.log('Users_DB_Result is ', Users_DB_Result);
};

clearDatabase(initiateDBSeeding);
