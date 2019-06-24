const {createUser, updateUser, addSignature} = require('./mutations');

const {getUser} = require('./queries');

module.exports = {
  Query: {
    getUser,
  },
  Mutation: {
    createUser,
    updateUser,
    addSignature,
  }
};
