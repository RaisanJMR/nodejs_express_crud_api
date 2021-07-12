import express from 'express';
import { createUsers, getSpecificUser, getUsers, deleteUser,updateUser } from '../controllers/users.js';

const router = express.Router();

// **************************************************
// by default all routes here starts with /users
// GET
// browser will only make get request
router.get('/', getUsers);
// **************************************************
// POST
// send data from front end to database
// when we do post request we have req.body
router.post('/', createUsers);
// **************************************************
// get a user with specific :id
router.get('/:id', getSpecificUser);
// **************************************************
// DELETE
router.delete('/:id', deleteUser);
// **************************************************
// PATCH
router.patch('/:id', updateUser);

export default router;
