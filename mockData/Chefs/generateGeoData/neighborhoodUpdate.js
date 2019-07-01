const {Neighborhood} = require('../../../api/DB/Models');

const neighborhoodUpdate = async (chefNeighborhood, chefID) => {
  let neighborhoodID = null;

  const haveNeighborhood = await Neighborhood.exists({name: chefNeighborhood});

  if (!haveNeighborhood) {
    const newNeighborhood = await Neighborhood.create({
      name: chefNeighborhood,
      chefs: [chefID],
    });

    neighborhoodID = newNeighborhood._id;
  } else {
    const foundResult = await Neighborhood.find({name: chefNeighborhood});

    const foundNeighborhood = foundResult.pop();

    neighborhoodID = foundNeighborhood._id;

    foundNeighborhood.chefs.push(chefID);

    await foundNeighborhood.save();
  }

  return neighborhoodID;
};

module.exports = neighborhoodUpdate;
