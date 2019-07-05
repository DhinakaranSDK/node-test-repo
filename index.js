const express = require('express');

// Constants
const PORT = 4500;
const HOST = 'localhost';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.get('/new', (req, res) => {
  res.send('New page\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
