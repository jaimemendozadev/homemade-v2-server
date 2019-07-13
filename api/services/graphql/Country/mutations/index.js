const createCountry = async (_parent, {newCountry}, {models}) => {
  const errorMsg = 'Could not save the new Country in the Database.';
  const {Country} = models;

  try {
    const savedCountry = await Country.create(newCountry);

    return [savedCountry];
  } catch (error) {
    console.log(`${errorMsg} ${error}`);
    throw new Error(errorMsg);
  }
};

module.exports = {
  createCountry,
};
