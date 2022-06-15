const { ApolloServer, gql } = require("apollo-server");
const { categories, products } = require("./db");
const typeDefs = require("./schema");
const Product = require("./resolver/Product");
const Query = require("./resolver/Query");
const Category = require("./resolver/Category");

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Product,
    Category,
  },
  context: {
    categories,
    products,
  },
});

server.listen().then(({ url }) => console.log(`listen on ${url} 🚀`));
