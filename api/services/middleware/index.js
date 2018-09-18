const bodyParser = require('body-parser')

const server = require('../graphql')

module.exports = app => {
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))

  // connect GraphQL to Express app
  server.applyMiddleware({ app })
}
