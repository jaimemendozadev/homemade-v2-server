const faker = require('faker');


const generateSingleUser = () => {
  const newUser = {};  

  newUser.firstName = faker.name.firstName();
  newUser.lastName = faker.name.lastName();
  newUser.bio = faker.name.jobDescriptor();
  newUser.status = faker.name.jobTitle();
  newUser.phoneNumber = faker.phone.phoneNumber();
  newUser.profileUrl = 'https://via.placeholder.com/300.png';
  newUser.signatureURL = faker.internet.url();
  newUser.email = faker.internet.email();
  
  return newUser;
};

module.exports = {
  generateSingleUser,
};
