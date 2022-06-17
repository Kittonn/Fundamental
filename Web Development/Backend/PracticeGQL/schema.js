const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    posts: [Posts!]!
    post(id: ID!): Posts
  }
  type Posts {
    userId: Int!
    id: Int!
    title: String!
    body: String!
  }
  type Mutation {
    addPost(input:addPost!):Posts!
    deletePost(id:ID!):Boolean!
    updatePost(id:ID!,input:UpdatePost!): Posts!
  }
  input UpdatePost {
    userId: Int!
    title: String!
    body:String!
  }
  input addPost {
    userId: Int!
    title: String!
    body:String!
  }
`;

module.exports = typeDefs;
