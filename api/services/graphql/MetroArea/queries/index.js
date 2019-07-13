// parent, args, context, info
const neighborhoods = async (parent, args, {models}) => {
  const errorMsg = "Couldn't find the Neighborhoods in the Database.";
  const {Neighborhood} = models;
  try {

    console.log(Neighborhood)
  } catch (error) {
    console.log(`${errorMsg} ${error}`);
    throw new Error(errorMsg);
  }
};

const chefs = () => {};
module.exports = {
  neighborhoods,
  chefs,
};
