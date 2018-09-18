const { ApolloServer } = require('apollo-server-express')
const { makeExecutableSchema } = require('graphql-tools')
const { readFileSync } = require('fs')
const { merge } = require('lodash')
const path = require('path')

const baseSchema = `
  schema {
    query: Query,
    mutation: Mutation
  }
`

const DishSchema = path.resolve(__dirname, './Dish/dish.graphql')
const OrderSchema = path.resolve(__dirname, './Order/order.graphql')
const UserSchema = path.resolve(__dirname, './User/user.graphql')

const DishResolvers = require('./Dish/dish.resolvers.js')
const OrderResolvers = require('./Order/order.resolvers.js')
const UserResolvers = require('./User/user.resolvers.js')

const schema = makeExecutableSchema({
  typeDefs: [
    baseSchema,
    readFileSync(UserSchema, 'utf-8'),
    readFileSync(DishSchema, 'utf-8'),
    readFileSync(OrderSchema, 'utf-8'),
  ],
  resolvers: merge({}, DishResolvers, OrderResolvers, UserResolvers),
})

const server = new ApolloServer({
  schema,
  context: ({ req }) => {
    console.log('req inside gql context ', req)
  },
})

module.exports = server
