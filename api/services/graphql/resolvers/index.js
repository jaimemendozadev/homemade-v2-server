const {merge} = require('lodash');
const DishResolvers = require('../Dish/dish.resolvers');
const OrderResolvers = require('../Order/order.resolvers');
const UserResolvers = require('../User/user.resolvers');
const ChefResolvers = require('../Chef/chef.resolvers');
const CityResolvers = require('../City/city.resolvers');
const StateResolvers = require('../State/state.resolvers');

const resolvers = merge(
  {},
  UserResolvers,
  OrderResolvers,
  DishResolvers,
  ChefResolvers,
  CityResolvers,
  StateResolvers,
);

module.exports = resolvers;
