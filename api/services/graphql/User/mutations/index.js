// parent, args, context, info

const createUser = async (_parent, {body}, {models}) => {
  const userPayload = body;
  const {User} = models;
  const errorMsg = "There was an error saving the new user in the DB.";

  try {
    const NewUser = await User.create(userPayload);

    return NewUser;

  } catch(error) {
    console.log(`${errorMsg} `, error);
    throw new Error(errorMsg);
  }

};

const updateUser = () => {};

const addSignature = () => {};

module.exports = {
  createUser,
  updateUser,
  addSignature,
};
