/*

  {
    _id: 5d0fc7e23ad9f34122b9c4b1,
    reviewText: 'Quo ut nulla.',
    rating: 0,
    chefId: 5d0fc7e13ad9f34122b9c3f5,
    orderId: 5d0fc7e13ad9f34122b9c493,
    date: 2019-06-22T21:20:12.508Z,
    __v: 0
  }



    {
    dishImages: [
      'https://s3-media4.fl.yelpcdn.com/bphoto/CQX5wGe49GOUZoQpqmD2sg/o.jpg'
    ],
    allergies: [],
    _id: 5d0fc7e13ad9f34122b9c42f,
    cuisineType: 'Barbecue',
    name: 'Barbecue ullam-consequatur-quos',
    description: 'id-similique-eum',
    chefId: 5d0fc7e13ad9f34122b9c40e,
    cashDonation: 21,
    isActive: false,
    quantity: 6,
    __v: 0
  }


  */

const _organizeData = dataArray => {
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

  const organizedReviews = _organizeData(reviews);
  const organizedDishes = _organizeData(dishes);

  for (let i = 0; i < chefArray.length; i++) {
    const currentID = chefArray[i];
    const haveReviews = organizedReviews[currentID];
    const haveDishes = organizedDishes[currentID];

    if (!haveReviews && !haveDishes) {
      continue;
    } else {
      const updateObj = {_id: currentID, payload: {}};

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
