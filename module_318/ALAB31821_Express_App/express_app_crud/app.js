const express = require('express');
const bodyParser = require('body-parser');
const jsonServer = require('json-server');
const localData = require('./data/users')
const path = require('path');

const app = express();
const port = process.env.PORT || 3001;

// Use body-parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Set up JSON Server for data storage
const jsonServerRouter = jsonServer.router(path.join(__dirname, 'db.json'));
app.use('/api', jsonServerRouter);

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Use Pug as the view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Define a router for your routes
const router = express.Router();

// GET request to display all users
router.get('/users', (req, res) => {
  const users = jsonServerRouter.db.get('users').value();
  res.render('users', { users });
});

// GET request to display the "Add User" page
router.get('/users/add', (req, res) => {
  res.render('addUser');
});

// POST request to add a new user
router.post('/users', (req, res) => {
  const newUser = req.body;
  const users = jsonServerRouter.db.get('users');
  const newId = users.value().length + 1; //generate a new ID
  newUser.id = newId; // Assign the new ID
  users.push(newUser).write();
  res.redirect('/users');
});

// GET request to edit a user by ID
router.get('/users/edit/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = jsonServerRouter.db.get('users').find({ id: userId }).value();

  if (user) {
    res.render('editUser', { user });
  } else {
    res.status(404).send('User not found');
  }
});

// POST request to update a user by ID
router.post('/users/edit/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const updatedUser = req.body;
  updatedUser.id = userId; // set the user ID in the request body
  const users = jsonServerRouter.db.get('users');
  const user = users.find({ id: userId });

  if (user.value()) {
    // Update the user with the new data
    user.assign(updatedUser).write();
    res.redirect('/users');
  } else {
    // Handle the case where the user with the provided ID doesn't exist
    res.status(404).send('User not found');
  }
});


// GET request to delete a user by ID
router.get('/users/delete/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  jsonServerRouter.db.get('users').remove({ id: userId }).write();
  res.redirect('/users');
});

// Start the Express server
app.use('/', router);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});