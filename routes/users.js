import express from 'express';

const router = express.Router();
const users = [
  {
    firstName: 'john',
    lastName: 'Doe',
    age: '20',
  },
  {
    firstName: 'james',
    lastName: 'haddin',
    age: '14',
  },
];
// by default all routes here starts with /users
// GET
// browser will only make get request
router.get('/', (req, res) => {
  console.log(users);
  res.send(users);
});
// POST
// send data from front end to database
// when we do post request we have req.body
router.post('/', (req, res) => {
  console.log('request body',req.body);
  res.send('POST ROUTER REACHED');
});

export default router;
