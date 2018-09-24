require('dotenv').config()
const app = require('./api')
const server = require('./api/services/graphql')

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
  console.log(`GraphQL Server Listening at ${server.graphqlPath}`)
})
