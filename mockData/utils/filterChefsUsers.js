const filterChefsUsers = (chefsInDB, usersInDB) => {

    // Create a set of all the chefs in mock data
  const filteredChefs = new Set();
  chefsInDB.forEach(chef => filteredChefs.add(chef._id));

  // Create a filtered array of Users that are not chefs
  const filteredUsers = usersInDB.filter(
    user => !filteredChefs.has(user._id),
  );

  return [filteredChefs, filteredUsers];

}

module.exports = filterChefsUsers;