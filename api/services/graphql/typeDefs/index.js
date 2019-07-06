const path = require('path');
const {readFileSync} = require('fs');
const ChefSchema = path.resolve(__dirname, '../Chef/chef.graphql');
const MetroAreaSchema = path.resolve(
  __dirname,
  '../MetroArea/metroarea.graphql',
);
const NeighborhoodSchema = path.resolve(
  __dirname,
  '../Neighborhood/neighborhood.graphql',
);
const DishSchema = path.resolve(__dirname, '../Dish/dish.graphql');
const OrderSchema = path.resolve(__dirname, '../Order/order.graphql');
const ReviewSchema = path.resolve(__dirname, '../Review/review.graphql');
const UserSchema = path.resolve(__dirname, '../User/user.graphql');
const CountrySchema = path.resolve(__dirname, '../Country/country.graphql');
const UtilSchema = path.resolve(__dirname, '../Util/util.graphql');

const baseSchema = `
schema {
  query: Query,
  mutation: Mutation
}
`;

const typeDefs = [
  baseSchema,
  readFileSync(ChefSchema, 'utf-8'),
  readFileSync(MetroAreaSchema, 'utf-8'),
  readFileSync(NeighborhoodSchema, 'utf-8'),
  readFileSync(DishSchema, 'utf-8'),
  readFileSync(OrderSchema, 'utf-8'),
  readFileSync(ReviewSchema, 'utf-8'),
  readFileSync(UserSchema, 'utf-8'),
  readFileSync(CountrySchema, 'utf-8'),
  readFileSync(UtilSchema, 'utf-8'),
];

module.exports = typeDefs;
