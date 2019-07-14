# [Homemade Server (ver2)](https://github.com/jaimemendozadev/homemade-v2-server)

[Homemade](https://github.com/home-made/App) is a React Native iOS application that helps people find new types of food from talented neighborhood home chefs.

This is the v2 Server, the original v1 implementation can be [found here](https://github.com/home-made/Server).

## Table of contents

- Initial Setup
- Create a `.env` File
- Starting the Server
- Upcoming Features
- Created By

## Initial Setup

Open up your terminal and clone the repo locally to your computer by running the following command at the target destination: `$ git clone https://github.com/jaimemendozadev/homemade-v2-server`

## Create a `.env` File

Fire up your terminal and create a new `.env` by simply running `$ touch .env.`

After creating the `.env` file, use your text editor to enter all the necessary credentials, urls, and app variables into separate lines inside the `.env` file. 

This app uses the Google Maps Platform for geolocation. [Click on the link](https://developers.google.com/maps/documentation/javascript/get-api-key) for more info on how to sign up to get your API Key. 

This app uses MongoDB, but if you prefer, you can sign up for a free [mLab MongoDB database](https://mlab.com/) to make it easy to save your app data.

There should be no spacing between the lines and do not end the line with punctuation or spacing. The `.env` should appear like the following snippet:

```

DB_URL = mongodb://DB_USER:DB_PW@RANDOM_DB.mlab.com:49023/projectName

GOOGLE_GEOCODE_URL = https://maps.googleapis.com/maps/api/geocode/json?latlng=

GOOGLE_MAPS_APIKEY = ENTER_VALUE_HERE

```

After creating the `.env` and you fire up the app, the key value pairs in the file will correspond to any line of code that references `process.env`.

## Starting the Server
This project uses the [Yarn package manager](https://yarnpkg.com/en/). Go to the Yarn website to learn more about how to install the package manger on your computer.

In the root of the app, use your terminal to run `$ yarn install` to install all the app dependencies. Wait until everything finishes loading.

Finally in another opened terminal tab, run the command `$ yarn run dev:start` to start the server.

Go to `http://localhost:5000/graphql` in your favorite browser to view the GraphQL Playground and view/manipulate the data using GraphQL queries and mutations. 

Remember, you can always stop the server from running by typing `Control + z` in the terminal window you used to start the server.


## Upcoming Features
This is very much a work in progress. The entire Database Schema has been refactored with more Mongo Schemas than the v1 and v2 also uses GraphQL for CRUD operations.

Upcoming features for the v2 that were not implemented in the v1 include:

- GraphQL Subscriptions for the React Native client.
- Payments with the Stripe API.


## Created By

**Jaime Mendoza**
[https://github.com/jaimemendozadev](https://github.com/jaimemendozadev)