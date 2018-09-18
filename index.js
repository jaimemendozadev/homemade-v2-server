require('dotenv').config()
const app = require('./api')
const server = require('./api/services/graphql')

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`)
  console.log(`GraphQL Server Listening at ${server.graphqlPath}`)
})
