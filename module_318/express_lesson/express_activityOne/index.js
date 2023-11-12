const express = require('express')
const data = require('./db.json')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// GET Post
app.get('/posts', (req, res) => {
    res.json(data)
})

app.get('/posts/:id', (req, res) => {
    res.json(data.posts)
});

app.listen(port, () => {
  console.log(`Server app listening on port http://localhost:${port}`)
})