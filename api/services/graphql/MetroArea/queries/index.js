// parent, args, context, info
const neighborhoods = async ({_id}, _args, {models}) => {
  const errorMsg = "Couldn't find the Neighborhoods in the Database.";
  const {MetroArea} = models;
  try {
    const {neighborhoods} = await MetroArea.findById(_id).populate(
      'neighborhoods',
    );

    return neighborhoods;
  } catch (error) {
    console.log(`${errorMsg} ${error}`);
    throw new Error(errorMsg);
  }
};

const chefs = async ({_id}, _args, {models}) => {
  const errorMsg = "Couldn't find the Chefs in the Database.";
  const {MetroArea} = models;
  try {
    const {chefs} = await MetroArea.findById(_id).populate('chefs');

    return chefs;
  } catch (error) {
    console.log(`${errorMsg} ${error}`);
    throw new Error(errorMsg);
  }
};

const findMetroArea = async (_parent, {metroAreaName}, {models}) => {
  const errorMsg = "Couldn't find the Metro Area in the Database";
  const {MetroArea} = models;

  try {
    const regex = new RegExp(metroAreaName, 'i');

    const newMetro = await MetroArea.find({name: regex});

    return newMetro;
  } catch (error) {
    console.log(`${errorMsg} ${error}`);
    throw new Error(errorMsg);
  }
};

module.exports = {
  neighborhoods,
  chefs,
  findMetroArea,
};
