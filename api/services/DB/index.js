const mongoose = require('mongoose')

const { DB_URL } = process.env

mongoose.connect(
  DB_URL,
  { useNewUrlParser: true },
)

const DB = mongoose.connection

mongoose.Promise = global.Promise

DB.on('error', console.error.bind(console, 'MongoDB connection error:'))

DB.on('connected', () => console.log('Connected to the Mongoose DB'))

module.exports = DB

/*
OrderSchema Status Codes
0: pending
1: accepted
2: completed
3: canceled
4: reviewed

*/
