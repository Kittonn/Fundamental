const { gql } = require("apollo-server");
const typeDefs = gql`
  type Query {
    hello: String!
    count: Int!
    pi: Float!
    check: Boolean!
    arrStr: [String!]!
    products(filter: ProductsFilterInput!): [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
  }

  type Category {
    name: String!
    id: ID!
    products(filter: ProductsFilterInput!): [Product!]!
  }

  type Product {
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
    id: ID!
    categoryId: String!
    image: String!
    category: Category
    reviews: [Review!]!
  }

  type Review {
    id: String!
    date: String!
    title: String!
    comment: String!
    rating: Int!
    productId: String!
  }
  input ProductsFilterInput {
    onSale: Boolean
    avgRating: Int
  }
  type Mutation {
    addCategory(input: AddCategoryInput!): Category!
    deleteCategory(id: ID!): Boolean!
    updateCategory(id:ID!,input: UpdateCategoryInput!): Category!
  }

  input AddCategoryInput {
    name: String!
  }
  input UpdateCategoryInput {
    name: String!
  }
`;

module.exports = typeDefs;
