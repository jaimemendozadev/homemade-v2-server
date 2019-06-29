/*

the googleResponse is  {
  plus_code: {
    compound_code: '5V25+54 Pasadena, CA, USA',
    global_code: '85635V25+54'
  },
  results: [
    {
      address_components: [Array],
      formatted_address: '393 E Walnut St, Pasadena, CA 91188, USA',
      geometry: [Object],
      place_id: 'ChIJaREo9mvDwoARRiAHu1ZIRwc',
      plus_code: [Object],
      types: [Array]
    },
    {
      address_components: [Array],
      formatted_address: '393 E Walnut St, Pasadena, CA 91188, USA',
      geometry: [Object],
      place_id: 'ChIJbYRWA2zDwoAR-XJHjXt8MtY',
      plus_code: [Object],
      types: [Array] // street_address
    },
    {
      address_components: [Array],
      formatted_address: 'Pasadena, CA 91188, USA',
      geometry: [Object],
      place_id: 'ChIJ7d0R7W7DwoARzxQr0tagzfo',
      types: [Array] //postal_code  
    },
    {
      address_components: [Array],
      formatted_address: 'Pasadena, CA, USA',
      geometry: [Object],
      place_id: 'ChIJUQszONzCwoARSo_RGhZBKwU',
      types: [Array] //locality, political
    },
    {
      address_components: [Array],
      formatted_address: 'Los Angeles County, CA, USA',
      geometry: [Object],
      place_id: 'ChIJMc1kAdMq3YARKjm9z9YofYM',
      types: [Array] // administrative_area_level_2, political
    },
    {
      address_components: [Array],
      formatted_address: 'California, USA',
      geometry: [Object],
      place_id: 'ChIJPV4oX_65j4ARVW8IJ6IJUYs',
      types: [Array] //administrative_area_level_1, political
    },
    {
      address_components: [Array],
      formatted_address: 'United States',
      geometry: [Object],
      place_id: 'ChIJCzYy5IS16lQRQrfeQ5K5Oxw',
      types: [Array] // country, political
    }
  ],
  status: 'OK'
}


the item is  doctor
the item is  establishment
the item is  health
the item is  point_of_interest


the item is  street_address


the item is  postal_code


the item is  locality
the item is  political


the item is  administrative_area_level_2
the item is  political


the item is  administrative_area_level_1
the item is  political


the item is  country
the item is  political




street_address address_components

the item is  { long_name: '393', short_name: '393', types: [ 'street_number' ] }
the item is  {
  long_name: 'East Walnut Street',
  short_name: 'E Walnut St',
  types: [ 'route' ]
}
the item is  {
  long_name: 'Pasadena',
  short_name: 'Pasadena',
  types: [ 'locality', 'political' ]
}
the item is  {
  long_name: 'Los Angeles County',
  short_name: 'Los Angeles County',
  types: [ 'administrative_area_level_2', 'political' ]
}
the item is  {
  long_name: 'California',
  short_name: 'CA',
  types: [ 'administrative_area_level_1', 'political' ]
}
the item is  {
  long_name: 'United States',
  short_name: 'US',
  types: [ 'country', 'political' ]
}
the item is  { long_name: '91188', short_name: '91188', types: [ 'postal_code' ] }





postal_code address_components

the item is  { long_name: '91188', short_name: '91188', types: [ 'postal_code' ] }
the item is  {
  long_name: 'Pasadena',
  short_name: 'Pasadena',
  types: [ 'locality', 'political' ]
}
the item is  {
  long_name: 'Los Angeles County',
  short_name: 'Los Angeles County',
  types: [ 'administrative_area_level_2', 'political' ]
}
the item is  {
  long_name: 'California',
  short_name: 'CA',
  types: [ 'administrative_area_level_1', 'political' ]
}
the item is  {
  long_name: 'United States',
  short_name: 'US',
  types: [ 'country', 'political' ]
}

*/

const parseAddress = serverResponse => {
  // const address = {
  //   streetNumber: faker.address.streetAddress(),
  //   city: faker.address.city(),
  //   state: faker.address.state(),
  //   postalCode: faker.address.zipCode(),
  // };

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

        if (types.includes('locality')) {
          addressInfo['locality'] = addressInfo.long_name;
        }

        if (types.incldues('administrative_area_level_1')) {
          addressInfo['administrative_area_level_1'] = addressInfo.long_name;
        }

        if (types.includes('country')) {
          addressInfo['country'] = addressInfo.long_name;
        }
      });
    }
  });
};

module.exports = parseAddress;
