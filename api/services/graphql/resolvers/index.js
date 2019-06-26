const {merge} = require('lodash');
const DishResolvers = require('../Dish/dish.resolvers');
const OrderResolvers = require('../Order/order.resolvers');
const UserResolvers = require('../User/user.resolvers');
const ChefResolvers = require('../Chef/chef.resolvers');

const resolvers = merge({}, UserResolvers, OrderResolvers, DishResolvers, ChefResolvers);

module.exports = resolvers;
