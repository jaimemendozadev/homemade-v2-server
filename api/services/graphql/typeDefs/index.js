const path = require('path');
const {readFileSync} = require('fs');
const DishSchema = path.resolve(__dirname, '../Dish/dish.graphql');
const OrderSchema = path.resolve(__dirname, '../Order/order.graphql');
const UserSchema = path.resolve(__dirname, '../User/user.graphql');
const ReviewSchema = path.resolve(__dirname, '../Review/review.graphql');
const ChefSchema = path.resolve(__dirname, '../Chef/chef.graphql');
const CitySchema = path.resolve(__dirname, '../City/city.graphql');

const baseSchema = `
schema {
  query: Query,
  mutation: Mutation
}
`;

const typeDefs = [
  baseSchema,
  readFileSync(DishSchema, 'utf-8'),
  readFileSync(OrderSchema, 'utf-8'),
  readFileSync(UserSchema, 'utf-8'),
  readFileSync(ReviewSchema, 'utf-8'),
  readFileSync(ChefSchema, 'utf-8'),
  readFileSync(CitySchema, 'utf-8')
];

module.exports = typeDefs;
