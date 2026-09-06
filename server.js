const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'POS System is running' });
});

// Products endpoint
const products = require('./data/products');
app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:category', (req, res) => {
  const category = req.params.category;
  if (products[category]) {
    res.json(products[category]);
  } else {
    res.status(404).json({ error: 'Category not found' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Chadiz POS Server running on port ${PORT}`);
});
