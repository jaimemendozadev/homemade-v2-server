const {bulkDBQuery} = require('../../utils');

const findCountry = async (_parent, {countryName}, {models}) => {
  const errorMsg = "Can't find the Country in the Database.";
  const {Country} = models;
  try {
    const byShortName = await Country.find({short_name: countryName});

    console.log('byShortName ', byShortName);

    if (byShortName.length) {
      return byShortName;
    } else {
      const byLongName = await Country.find({long_name: countryName});

      console.log('byLongName ', byLongName);

      if (byLongName.length) {
        return byLongName;
      }

      throw new Error(errorMsg);
    }
  } catch (error) {
    console.log(`${errorMsg} ${error}`);
    throw new Error(errorMsg);
  }
};

const metroAreas = async ({metroAreas}, _args, {models}) => {
  const errorMsg = "Can't find Metro Areas in the Database.";

  console.log('metroAreas ', metroAreas);

  if (!metroAreas) {
    throw new Error(errorMsg);
  }

  const {MetroArea} = models;
  try {
    const foundMetroAreas = await bulkDBQuery(metroAreas, MetroArea);
    console.log('foundMetroAreas ', foundMetroAreas);

    return foundMetroAreas;
  } catch (error) {
    console.log(`${errorMsg} ${error}`);
    throw new Error(errorMsg);
  }
};

module.exports = {
  findCountry,
  metroAreas,
};
