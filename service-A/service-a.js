const express = require('express');

const app = express();
const port = 3001;

app.get('/api/data', (req, res) => {
  console.log(`Received request to /api/data: ${req.method} ${req.url}`);
  res.status(200).send('Response from Service A');
});

app.listen(port, () => {
  console.log(`Service A listening on port ${port}`);
});
