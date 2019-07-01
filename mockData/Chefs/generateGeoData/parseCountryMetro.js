const parseCountryMetro = serverResponse => {
  const payload = {};

  serverResponse.forEach(obj => {
    // Get the types array
    const {address_components, types} = obj;

    // Only use obj that has "street_address" in types
    if (types.includes('street_address')) {
      address_components.forEach(addressObj => {
        const {types} = addressObj;

        if (types.includes('country')) {
          payload['Country'] = addressObj.long_name;
        }

        if (types.includes('administrative_area_level_2')) {
          payload['MetroArea'] = addressObj.long_name;
        }
      });
    }
  });

  return payload;
};

module.exports = parseCountryMetro;
