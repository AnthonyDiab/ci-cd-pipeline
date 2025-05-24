require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Simple homepage
app.get('/', (req, res) => {
  res.send('Hello from Azure App Service!');
});

// DB route using env var
const connectionString = process.env.DATABASE_URL || 'No connection string set';
app.get('/db', (req, res) => {
  res.send(`Database connection string: ${connectionString}`);
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});