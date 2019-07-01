const parseAddress = serverResponse => {
  const addressInfo = {};

  serverResponse.forEach(obj => {
    // Get the types array
    const {address_components, types} = obj;

    // Only use obj that has "street_address" in types
    if (types.includes('street_address')) {
      address_components.forEach(addressObj => {
        const {types} = addressObj;

        if (types.includes('street_number')) {
          addressInfo['street_number'] = addressObj.long_name;
        }

        if (types.includes('route')) {
          addressInfo['route'] = addressObj.long_name;
        }

        // Name of the local neighborhood
        if (types.includes('locality')) {
          addressInfo['locality'] = addressObj.long_name;
        }

        // Similar to a U.S. State
        if (types.includes('administrative_area_level_1')) {
          addressInfo['administrative_area_level_1'] = addressObj.long_name;
        }

        if (types.includes('postal_code')) {
          addressInfo['postal_code'] = addressObj.postal_code;
        }

        if (types.includes('country')) {
          addressInfo['country'] = addressObj.long_name;
        }
      });
    }
  });

  const {
    street_number,
    route,
    locality,
    administrative_area_level_1,
    postal_code,
  } = addressInfo;

  const streetNumber = `${street_number} ${route}`;
  const city = locality;
  const state = administrative_area_level_1;
  const postalCode = postal_code;

  return {
    streetNumber,
    city,
    state,
    postalCode,
  };
};

module.exports = parseAddress;
