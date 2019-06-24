const {
    createBoundingBox,
    isChefInBounds,
  } = require('./utils');
  
  const findChefsInRange = async (_parent, {geoCoords}, {models}) => {
    const {User} = models;
    const boundingBox = createBoundingBox(geoCoords);
    const errorMsg = 'There are currently no chefs within your location.';
  
    try {
      const foundChefs = await User.find({isChef: true});
  
      if (foundChefs.length) {
        const inBoundChefs = foundChefs.filter(chef =>
          isChefInBounds(chef, boundingBox),
        );
  
        if (!inBoundChefs.length) {
          throw new Error(errorMsg);
        }
  
        return inBoundChefs;
      } else {
        throw new Error(errorMsg);
      }
    } catch (error) {
      throw new Error('There was a problem finding the chefs in range.');
    }
  };


  module.exports = findChefsInRange;