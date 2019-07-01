const getSingleChef = async (_parent, {chefID}, {models}) => {
  const {Chef} = models;
  const errorMsg = 'Could not find the Chef with the given ID.';

  try {
    const foundChef = await Chef.findById(chefID);

    return foundChef;
  } catch (error) {
    throw new Error(errorMsg);
  }
};

module.exports = getSingleChef;
