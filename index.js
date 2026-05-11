const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');

const typeDefs = `#graphql
  type User {
    id: Int
    name: String
    age: Int
  }

  type Query {
    user(id: Int): User
    users: [User]
  }

type Mutation {
  addUser(name: String, age: Int): User
  deleteUser(id: Int): User
  updateUser(id: Int, name: String, age: Int): User
}
`;

let users = [
  { id: 1, name: 'Ruoxi', age: 25 },
  { id: 2, name: 'Tanaka', age: 30 },
  { id: 3, name: 'Yamada', age: 28 },
];

const resolvers = {
  Query: {
    users: () => users,

    user: (_, args) => {
      return users.find(user => user.id === args.id);
    },
  },

  Mutation: {
  addUser: (_, args) => {
    const newUser = {
      id: users.length + 1,
      name: args.name,
      age: args.age,
    };

    users.push(newUser);

    return newUser;
  },

  deleteUser: (_, args) => {
    const deletedUser = users.find(user => user.id === args.id);

    users = users.filter(user => user.id !== args.id);

    return deletedUser;
  },
  
  updateUser: (_, args) => {
    const user = users.find(user => user.id === args.id);

    if (!user) {
      return null;
    }

    user.name = args.name;
    user.age = args.age;

    return user;
  },
},
};
const server = new ApolloServer({
  typeDefs,
  resolvers,
}); 

async function startServer() {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`Server ready at: ${url}`);
}

startServer();