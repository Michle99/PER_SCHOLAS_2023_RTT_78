const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const users = require('./data/users')

const app = express();
const port = process.env.PORT || 3001;

// Use body-parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Use Pug as the view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Define a router for your routes
const router = express.Router();

// GET request to display all users
router.get('/users', (req, res) => {
  res.render('users', { users });
});

// GET request to display the "Add User" page
router.get('/users/add', (req, res) => {
  res.render('addUser');
});

// POST request to add a new user
router.post('/users', (req, res) => {
  // const newUser = req.body;
  // const newId = users.length + 1; // generate a new ID
  // newUser.id = newId; // Assign the new ID
  // users = [...users, newUser];
  // res.redirect('/users');
  if (req.body.name && req.body.email) {
    if (users.find((user) => user.name == req.body.name)) {
      res.json({ error: "Name already taken" });
      return;
    }

    const user = {
      id: users[users.length - 1].id + 1,
      name: req.body.name,
      email: req.body.email
    };

    users.push(user);
    res.json(users[users.length - 1]);
  } else {
    res.json({ error: "Insufficient Data" })
  }
});

// GET request to edit a user by ID
router.get('/users/edit/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(user => user.id === userId);

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
  const index = users.findIndex(user => user.id === userId);

  if (index !== -1) {
    // Update the user with the new data
    users = [...users.slice(0, index), updatedUser, ...users.slice(index + 1)];
    res.redirect('/users');
  } else {
    // Handle the case where the user with the provided ID doesn't exist
    res.status(404).send('User not found');
  }
});

// GET request to delete a user by ID
router.get('/users/delete/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const index = users.findIndex(user => user.id === userId);

  if (index !== -1) {
    users = [...users.slice(0, index), ...users.slice(index + 1)];
    res.redirect('/users');
  } else {
    res.status(404).send('User not found');
  }
});

// Start the Express server
app.use('/', router);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});