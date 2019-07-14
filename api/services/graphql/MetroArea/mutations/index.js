const createMetroArea = async (_parent, {incomingMetro}, {models}) => {
  const errorMsg = "Could not created the new Metro Area in the Database.";
  const {MetroArea} = models;
  try {
    const newMetro = await MetroArea.create(incomingMetro);

    return newMetro;
    
  } catch(error) {
    console.log(`${errorMsg} ${error}`);
    throw new Error(errorMsg);
  }
}

module.exports = {
    createMetroArea
}