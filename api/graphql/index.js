const { makeExecutableSchema } = require('graphql-tools')
const { merge } = require('lodash')

// get schemas

// get resolvers

const baseSchema = `
  schema {
    query: Query,
    mutation: Mutation
  }
`

const schema = makeExecutableSchema({
  typedefs: [baseSchema],
  resolvers: merge({}),
})

module.exports = schema
