const findCountry = async (_parent, {countryName}, {models}) => {
  const errorMsg = "Can't find the Country in the Database.";
  const {Country} = models;
  try {
    const regex = new RegExp(countryName, 'i');

    const byShortName = await Country.find({short_name: regex});

    if (byShortName.length) {
      return byShortName;
    } else {
      const byLongName = await Country.find({long_name: regex});

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

const metroAreas = async ({_id}, _args, {models}) => {
  const errorMsg = "Can't find Metro Areas in the Database.";
  const {Country} = models;

  try {
    const {metroAreas} = await Country.findById(_id).populate('metroAreas');

    return metroAreas;
  } catch (error) {
    console.log(`${errorMsg} ${error}`);
    throw new Error(errorMsg);
  }
};

module.exports = {
  findCountry,
  metroAreas,
};
