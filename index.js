import express from 'express';
import usersRoutes from './routes/users.js';
const app = express();
const PORT = 5000;

// bodyparser allows us to take incoming post request bodies
app.use(express.json());

// ***************************************************
// create 5 api
// 1-> GET /users find all users
// 2-> POST /users creates a user
// 3-> GET /users/:id find user details with /:id
// 4-> DELETE /users/:id delete a user with /:id
// 5-> PATCH or PUT /users/:id updates a user /:id
// ***************************************************
// when user hit '/users' it points to usersRoute file
app.use('/users', usersRoutes);
app.get('/', (req, res) => {
  console.log(req.query);
  res.send('hello from home page');
});

app.listen(PORT, () => {
  console.log(`server running on port: http://localhost:${PORT}`);
});
