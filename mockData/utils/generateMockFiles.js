const path = require('path');
const writeFileToDisk = require('./writeFileToDisk.js');
const {generateSingleUser} = require('../Users');

// Create Users File and Seed DB
const createFiles = async () => {
  const filePath = path.join(__dirname, '../mockJSON/Users.json');
  const payloadArray = [];

  for (let i = 0; i < 30; i++) {
    payloadArray.push(generateSingleUser());
  }

  await writeFileToDisk(filePath, payloadArray);
};

createFiles();
