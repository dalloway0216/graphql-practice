type User = {
  id: string;
  name: string;
  age: number;
};

const user: User = {
  id: "1",
  name: "Tanaka",
  age: 20,
};

const users: User[] = [
  {
    id: "1",
    name: "Tanaka",
    age: 20,
  },
  {
    id: "2",
    name: "Suzuki",
    age: 25,
  },
];

function getUserName(user: User): string {
  return user.name;
}

console.log(getUserName(user));