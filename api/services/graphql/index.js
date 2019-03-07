const {ApolloServer} = require('apollo-server-express');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const {User, Order, Dish} = require('../../DB/Models');

const server = new ApolloServer({
  typeDefs: typeDefs.join(' '),
  resolvers,
  context: ({req}) => ({
    req,
    models: {User, Order, Dish},
  }),
});

module.exports = server;
