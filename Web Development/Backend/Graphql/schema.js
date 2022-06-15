const {gql} = require("apollo-server")
const typeDefs = gql`
  type Query {
    hello: String!
    count: Int!
    pi: Float!
    check: Boolean!
    arrStr: [String!]!
    products: [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
  }

  type Category {
    name: String!
    id: ID!
    products: [Product!]!
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
  }
`;

module.exports = typeDefs