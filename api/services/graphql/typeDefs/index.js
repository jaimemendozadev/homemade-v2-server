const path = require('path');
const {readFileSync} = require('fs');
const DishSchema = path.resolve(__dirname, '../Dish/dish.graphql');
const OrderSchema = path.resolve(__dirname, '../Order/order.graphql');
const UserSchema = path.resolve(__dirname, '../User/user.graphql');
const ReviewSchema = path.resolve(__dirname, '../Review/review.graphql');

const baseSchema = `
schema {
  query: Query,
  mutation: Mutation
}
`;

const typeDefs = [
  baseSchema,
  readFileSync(UserSchema, 'utf-8'),
  readFileSync(OrderSchema, 'utf-8'),
  readFileSync(DishSchema, 'utf-8'),
  readFileSync(ReviewSchema, 'utf-8'),
];

module.exports = typeDefs;
