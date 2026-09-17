const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Root endpoint - returns a greeting
app.get('/', (req, res) => {
  res.json({ message: 'Hello from my automated pipeline!' });
});

// Health check endpoint - crucial for deployment monitoring
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});