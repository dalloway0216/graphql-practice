const { users } = require("../data/users");

const userResolver = {
  Query: {
    users: () => users,

    user: (_, args) => {
      return users.find((user) => user.id === args.id);
    },
  },

  Mutation: {
    addUser: (_, args) => {
      const newUser = {
        id: String(users.length + 1),
        name: args.name,
        age: args.age,
      };

      users.push(newUser);

      return newUser;
    },

    deleteUser: (_, args) => {
      const index = users.findIndex(
        (user) => user.id === args.id
      );

      if (index === -1) return null;

      const deletedUser = users[index];

      users.splice(index, 1);

      return deletedUser;
    },

    updateUser: (_, args) => {
      const user = users.find(
        (user) => user.id === args.id
      );

      if (!user) return null;

      if (args.name) {
        user.name = args.name;
      }

      if (args.age) {
        user.age = args.age;
      }

      return user;
    },
  },
};

module.exports = userResolver;