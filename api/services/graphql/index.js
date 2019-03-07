const {ApolloServer} = require('apollo-server-express');
const {readFileSync} = require('fs');
const {merge} = require('lodash');
const path = require('path');
const {User, Order, Dish} = require('../../DB/Models');

const DishSchema = path.resolve(__dirname, './Dish/dish.graphql');
const OrderSchema = path.resolve(__dirname, './Order/order.graphql');
const UserSchema = path.resolve(__dirname, './User/user.graphql');
const DishResolvers = require('./Dish/dish.resolvers.js');
const OrderResolvers = require('./Order/order.resolvers.js');
const UserResolvers = require('./User/user.resolvers.js');

const baseSchema = `
  schema {
    query: Query,
    mutation: Mutation
  }
`;

const server = new ApolloServer({
  typeDefs: [
    baseSchema,
    readFileSync(UserSchema, 'utf-8'),
    readFileSync(OrderSchema, 'utf-8'),
    readFileSync(DishSchema, 'utf-8'),
  ].join(' '),
  resolvers: merge({}, UserResolvers, OrderResolvers, DishResolvers),
  context: ({req}) => ({
    req,
    models: {User, Order, Dish},
  }),
});

module.exports = server;
