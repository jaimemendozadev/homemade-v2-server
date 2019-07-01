const generateChefUpdates = require('./generateChefUpdates');
const generateMockChefs = require('./generateMockChefs');
const generateGeoData = require('./generateGeoData');
const {Chef} = require('../../api/DB/Models');

const createSaveChefsInDB = async generatedUsers => {
  // Use half of existing users and make them chefs
  const ChefsPayload = generateMockChefs(generatedUsers);

  const Chefs_DB_Result = await Chef.insertMany(ChefsPayload);

  // Perform Updates Here

  const updatedChefs = await generateGeoData(Chefs_DB_Result);

  return updatedChefs;

  // return Chefs_DB_Result;
};

module.exports = {
  createSaveChefsInDB,
  generateChefUpdates,
};
