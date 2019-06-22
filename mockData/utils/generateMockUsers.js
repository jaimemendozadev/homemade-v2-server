const path = require('path');
const writeFileToDisk = require('./writeFileToDisk.js');
const {generateSingleUser} = require('../Users');

const basePath = '../../mockJSON/';
const usersPath = path.join(__dirname, `${basePath}Users.json`);

// Create Users File and Seed DB
const generateMockUsers = async () => {
  const usersPayload = [];

  for (let i = 0; i < 30; i++) {
    usersPayload.push(generateSingleUser());
  }

  await writeFileToDisk(usersPath, usersPayload);
};

generateMockUsers();
