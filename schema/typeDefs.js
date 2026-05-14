const typeDefs = `#graphql
  type User {
    id: ID
    name: String
    age: Int
    gender: String
  }

  type Query {
    users: [User]
    user(id: ID): User
  }

  type Mutation {
    addUser(name: String, age: Int): User
    deleteUser(id: ID): User
    updateUser(id: ID, name: String, age: Int): User
  }
`;

module.exports = typeDefs;