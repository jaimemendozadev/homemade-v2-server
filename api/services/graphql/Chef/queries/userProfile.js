const userProfile = async ({userProfile}, _args, {models}) => {
  const {User} = models;
  const UserID = userProfile;

  const errorMsg = "There was a problem resolving the Chef's User profile.";

  try {
    const foundProfile = await User.findById({_id: UserID});

    return foundProfile;
  } catch (error) {
    console.log(`${errorMsg} `, error);
    throw new Error(errorMsg);
  }
};

module.exports = userProfile;
