const findCountry = async (_parent, {countryName}, {models}) => {
  const errorMsg = "Can't find the Country in the Database.";
  const {Country} = models;
  try {
    const byShortName = await Country.find({short_name: countryName}).populate(
      'metroAreas',
    );

    if (byShortName.length) {
      return byShortName;
    } else {
      const byLongName = await Country.find({long_name: countryName}).populate(
        'metroAreas',
      );

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

const metroAreas = async ({metroAreas}) => {
  const errorMsg = "Can't find Metro Areas in the Database.";

  console.log('metroAreas ', metroAreas);
  if (!metroAreas) {
    throw new Error(errorMsg);
  } else {
    return metroAreas;
  }
};

module.exports = {
  findCountry,
  metroAreas,
};
