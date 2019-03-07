const {merge} = require('lodash');
const DishResolvers = require('../Dish/dish.resolvers.js');
const OrderResolvers = require('../Order/order.resolvers.js');
const UserResolvers = require('../User/user.resolvers.js');

const resolvers = merge({}, UserResolvers, OrderResolvers, DishResolvers);

module.exports = resolvers;
