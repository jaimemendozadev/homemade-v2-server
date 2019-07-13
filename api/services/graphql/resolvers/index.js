const {merge} = require('lodash');
const ChefResolvers = require('../Chef/chef.resolvers');
const MetroAreaResolvers = require('../MetroArea/metroarea.resolvers');
const NeighborhoodResolvers = require('../Neighborhood/neighborhood.resolvers');
const CountryResolvers = require('../Country/country.resolvers');
const DishResolvers = require('../Dish/dish.resolvers');
const OrderResolvers = require('../Order/order.resolvers');
const UserResolvers = require('../User/user.resolvers');
const ReviewResolvers = require('../Review/review.resolvers');

const resolvers = merge(
  {},
  ChefResolvers,
  MetroAreaResolvers,
  NeighborhoodResolvers,
  CountryResolvers,
  DishResolvers,
  OrderResolvers,
  UserResolvers,
  ReviewResolvers
);

module.exports = resolvers;
