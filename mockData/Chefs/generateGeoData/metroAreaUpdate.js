const {MetroArea} = require('../../../api/DB/Models');

// name, neighborhoods, chefs
const metroAreaUpdate = async (chefMetroArea, neighborhoodID, chefID) => {
  let metroAreaID = null;

  const haveMetroArea = MetroArea.exists({name: chefMetroArea});

  if (!haveMetroArea) {
    const payload = {
      name: chefMetroArea,
      neighborhoods: [neighborhoodID],
      chefs: [chefID],
    };

    const newMetro = await MetroArea.create(payload);

    metroAreaID = newMetro._id;
  } else {
    const foundResult = await MetroArea.find({name: chefMetroArea});

    const foundMetro = foundResult.pop();

    metroAreaID = foundMetro._id;

    foundMetro.neighborhoods.push(neighborhoodID);
    foundMetro.chefs.push(chefID);

    await foundMetro.save();
  }

  return metroAreaID;
};

module.exports = metroAreaUpdate;
