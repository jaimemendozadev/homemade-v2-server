const {Country} = require('../../../api/DB/Models');

const countryUpdate = async (chefCountry, metroAreaID) => {
  const haveCountry = await Country.exists({name: chefCountry});

  if (!haveCountry) {
    const payload = {
      name: chefCountry,
      metroAreas: [metroAreaID],
    };

    await Country.create(payload);
  } else {
    const foundResult = await Country.find({name: chefCountry});

    const foundCountry = foundResult.pop();

    foundCountry.metroAreas.push(metroAreaID);

    await foundCountry.save();
  }
};

module.exports = countryUpdate;
