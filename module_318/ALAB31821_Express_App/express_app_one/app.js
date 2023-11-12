const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

// Set Pug as the view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Middleware for parsing JSON
app.use(express.json());

// Serve static files (CSS, JS, etc.)
app.use(express.static(path.join(__dirname, 'public')));



// JSON database file path
const dataFilePath = path.join(__dirname, 'data', 'data.json');

// Define a router for your routes
const router = express.Router();

// Use the router for all routes starting with /api
app.use('/api', router);

// GET request to render the homepage
router.get('/', (req, res) => {
  const data = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));
  res.render('index', { items: data.items });
});

// GET request to retrieve data from the JSON database
router.get('/data', (req, res) => {
  const data = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));
  res.json(data.items);
});

// GET request to retrieve data by ID from the JSON database
router.get('/data/:id', (req, res) => {
  const id = req.params.id;
  const data = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));

  const item = data.items.find((item) => item.id === id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: 'Data not found' });
  }
});


// POST request to add data to the JSON database
router.post('/data', (req, res) => {
  const newData = req.body;
  const data = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));
  data.items.push(newData);
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
  res.json(data);
});

// PUT request to update data in the JSON database
router.put('/data/:id', (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  const data = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));

  const index = data.items.findIndex((item) => item.id === id);
  if (index !== -1) {
    data.items[index] = updatedData;
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
    res.json(data);
  } else {
    res.status(404).json({ message: 'Data not found' });
  }
});

// DELETE request to remove data from the JSON database
router.delete('/data/:id', (req, res) => {
  const id = req.params.id;
  const data = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));

  const index = data.items.findIndex((item) => item.id === id);
  if (index !== -1) {
    data.items.splice(index, 1);
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
    res.json(data);
  } else {
    res.status(404).json({ message: 'Data not found' });
  }
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
