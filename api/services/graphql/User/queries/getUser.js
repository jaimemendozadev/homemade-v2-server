const getUser = async (_parent, {userID}, {models}) => {
    const {User} = models;
  
    try {
      const foundUser = await User.findById(userID);
  
      return foundUser;
    } catch (error) {
      console.log('Error getting a user ', error);
  
      throw new Error('There was an error finding the User.');
    }
  };


  module.exports = getUser;