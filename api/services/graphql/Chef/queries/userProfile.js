const userProfile = async (parent, args, {User}) => {
  const UserID = parent.userProfile;

  console.log('parent is ', parent)
  console.log('UserID is ', UserID)

  const errorMsg = "There was a problem resolving the Chef's User profile.";

  try {
    const foundProfile = await User.findOne({_id: UserID});

    console.log('foundProfile is ', foundProfile);

    return foundProfile;
  
  } catch(error) {
    console.log(`${errorMsg} `, error);
    throw new Error(errorMsg);
  }
}

module.exports = userProfile;