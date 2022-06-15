const { ApolloServer, gql } = require("apollo-server");

// String, Int, Float, Boolean

const typeDefs = gql`
  type Query {
    hello: String!
    count:Int!
    pi:Float!
    check:Boolean!
    arrStr: [String!]!
  }
`;

const resolvers = {
  Query: {
    hello: () =>'kitton',
    count: () => 12,
    pi:() => 3.14,
    check:()=>false,
    arrStr:()=>['hello','world']
  },
};

const server = new ApolloServer({typeDefs,resolvers});

server.listen().then(({ url }) => console.log(`listen on ${url} 🚀`));
