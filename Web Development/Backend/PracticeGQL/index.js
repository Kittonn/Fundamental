const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const Query = require("./resolvers/Query");
const post = require("./db");
const Mutation = require("./resolvers/Mutation");

const app = new ApolloServer({
  typeDefs,
  resolvers: { Query, Mutation },
  context: { post },
});

app.listen().then(({ url }) => console.log(`listen on ${url}`));
