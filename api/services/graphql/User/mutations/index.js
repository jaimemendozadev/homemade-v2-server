// parent, args, context, info

const createUser = async (_parent, {body}, {models}) => {
  const userPayload = body;
  const {User} = models;
  const errorMsg = 'There was an error saving the new user in the DB.';

  try {
    const NewUser = await User.create(userPayload);

    return NewUser;
  } catch (error) {
    console.log(`${errorMsg} `, error);
    throw new Error(errorMsg);
  }
};

const updateUser = async (_parent, {userID, body}, {models}) => {
  const userPayload = body;
  const {User} = models;
  const errorMsg = 'There was an error updating the user in the DB.';

  try {
    const UpdatedUser = await User.findOneAndUpdate({_id: userID}, userPayload, {new: true});

    return UpdatedUser;
    
  } catch (error) {
    console.log(`${errorMsg} `, error);
    throw new Error(errorMsg);
  }
};

const addSignature = () => {};

module.exports = {
  createUser,
  updateUser,
  addSignature,
};
