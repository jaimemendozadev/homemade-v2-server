const generateUserUpdates = chefs => {
  const UserUpdatesArray = [];

  for (let i = 0; i < chefs.length; i++) {
    const currentChef = chefs[i];

    const updateObj = {
      _id: currentChef.userProfile,
      payload: {chefProfile: currentChef._id, type: 'User'},
    };
    UserUpdatesArray.push(updateObj);
  }

  return UserUpdatesArray;
};

module.exports = generateUserUpdates;
