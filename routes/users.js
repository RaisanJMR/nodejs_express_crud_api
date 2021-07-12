import express from 'express';
import { v4 as uuidv4 } from 'uuid';
const router = express.Router();
let users = [
  // {
  //   firstName: 'john',
  //   lastName: 'Doe',
  //   age: '20',
  // },
  // {
  //   firstName: 'james',
  //   lastName: 'haddin',
  //   age: '14',
  // },
];
// **************************************************
// by default all routes here starts with /users
// GET
// browser will only make get request
router.get('/', (req, res) => {
  res.send(users);
});
// **************************************************
// POST
// send data from front end to database
// when we do post request we have req.body
router.post('/', (req, res) => {
  const user = req.body;
  // push the body of the post request to array
  users.push({ ...user, id: uuidv4() });
  res.send(`user with name ${user.firstName} added to DB`);
});
// **************************************************
// get a user with specific :id
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
});
// **************************************************
// DELETE
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  // when user.id != id it returns true and keeps that data.
  users = users.filter((user) => user.id != id);
  res.send(`user with id ${id} deleted from database`)
});
export default router;
