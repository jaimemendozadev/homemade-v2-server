const {merge} = require('lodash');
const ChefResolvers = require('../Chef/chef.resolvers');
const MetroAreaResolvers = require('../MetroArea/metroarea.resolvers');
const CountryResolvers = require('../Country/country.resolvers');
const DishResolvers = require('../Dish/dish.resolvers');
const OrderResolvers = require('../Order/order.resolvers');
const StateResolvers = require('../State/state.resolvers');
const UserResolvers = require('../User/user.resolvers');

const resolvers = merge(
  {},
  ChefResolvers,
  MetroAreaResolvers,
  CountryResolvers,
  DishResolvers,
  OrderResolvers,
  StateResolvers,
  UserResolvers,
);

module.exports = resolvers;
