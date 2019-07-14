const chefs = async ({_id}, _args, {models}) => {
  const errorMsg = "Chefs can't be found in the Database.";

  const {Neighborhood} = models;

  try {
    const {chefs }= await Neighborhood.findById(_id).populate('chefs');
    
    return chefs;

  } catch(error) {
    console.log(`${errorMsg} ${error}`);
    throw new Error(errorMsg);

  }
};

const findNeighborhood = async(_parent, {findNeighborhood}, {models}) => {
  const errorMsg = "Can't find the Neighborhood in the Database.";

  const {Neighborhood} = models;

  try {
    const regex = new RegExp(findNeighborhood, "i");
    const foundNeighborhood = await Neighborhood.find({name: regex});

    return foundNeighborhood;
  } catch(error) {
    console.log(`${errorMsg} ${error}`);
    throw new Error(errorMsg);
  }
};

module.exports = {
  chefs,
  findNeighborhood
};
