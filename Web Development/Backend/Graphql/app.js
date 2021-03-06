const { ApolloServer, gql } = require("apollo-server");
const { categories, products,reviews } = require("./db");
const typeDefs = require("./schema");
const Product = require("./resolver/Product");
const Query = require("./resolver/Query");
const Category = require("./resolver/Category");
const Mutation = require("./resolver/Mutation")
const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Product,
    Category,
    Mutation
  },
  context: {
    categories,
    products,
    reviews
  },
});

server.listen().then(({ url }) => console.log(`listen on ${url} 🚀`));
