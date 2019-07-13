const {Country} = require('../../../api/DB/Models');

const countryUpdate = async (chefCountry, metroAreaID) => {
  const {short_name, long_name} = chefCountry;

  const haveCountry = await Country.exists({long_name});

  if (!haveCountry) {
    const payload = {
      short_name,
      long_name,
      metroAreas: [metroAreaID],
    };

    await Country.create(payload);
  } else {
    const foundResult = await Country.find({long_name});

    const foundCountry = foundResult.pop();
    const {metroAreas} = foundCountry;

    const foundMetroIdx = metroAreas.includes(metroAreaID);

    if(foundMetroIdx < 0) {
      foundCountry.metroAreas.push(metroAreaID);

      await foundCountry.save();
    }
  }
};

module.exports = countryUpdate;
