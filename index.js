const express = require('express');

// Constants
const PORT = 4500;

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.get('/new', (req, res) => {
  res.send('New page');
});

app.listen(PORT);
console.log(`Running on ${PORT}`);
