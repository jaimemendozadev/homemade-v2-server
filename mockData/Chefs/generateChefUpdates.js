const organizeData = dataArray => {
  const payload = {};

  dataArray.forEach(obj => {
    const ID = obj.chefId;
    const targetID = obj._id;

    if (!payload[ID]) {
      payload[ID] = [];
    }

    payload[ID].push(targetID);
  });

  return payload;
};

const generateChefUpdates = (reviews, dishes, chefArray) => {
  const results = [];

  const organizedReviews = organizeData(reviews);
  const organizedDishes = organizeData(dishes);

  for (let i = 0; i < chefArray.length; i++) {
    const currentID = chefArray[i];

    const haveReviews = organizedReviews[currentID];
    const haveDishes = organizedDishes[currentID];

    if (!haveReviews && !haveDishes) {
      continue;
    } else {
      const updateObj = {_id: currentID, payload: {}, type: 'Chef'};

      if (haveDishes) {
        updateObj['payload']['chefDishes'] = haveDishes;
      }

      if (haveReviews) {
        updateObj['payload']['chefReviews'] = haveReviews;
      }

      results.push(updateObj);
    }
  }

  return results;
};

module.exports = generateChefUpdates;
