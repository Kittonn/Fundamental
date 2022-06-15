const { ApolloServer, gql } = require("apollo-server");

const typeDefs = require("./schema");
const Product = require("./resolver/Product");
const Query = require("./resolver/Query");
const Category = require("./resolver/Category");
const resolvers = {
  Query,
  Product,
  Category,
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => console.log(`listen on ${url} 🚀`));
