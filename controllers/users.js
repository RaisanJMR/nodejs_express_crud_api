import { v4 as uuidv4 } from 'uuid';

let users = [];

// we use controllers to handle logic inside each routes
export const createUsers = (req, res) => {
  const user = req.body;
  // push the body of the post request to array
  users.push({ ...user, id: uuidv4() });
  res.send(`user with name ${user.firstName} added to DB`);
};



export const getUsers = (req, res) => {
  res.send(users);
};



export const getSpecificUser = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  // when user.id != id it returns true and keeps that data.
  users = users.filter((user) => user.id != id);
  res.send(`user with id ${id} deleted from database`);
};


export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  const user = users.find((user) => user.id === id);
  console.log(user);
  if (firstName) user.firstName = firstName;

  if (lastName) user.lastName = lastName;

  if (age) user.age = age;
  res.send(`user with ${id} has been updated`);
};
