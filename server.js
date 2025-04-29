const express = require('express');
const app = express();
const PORT = 3000;

const userRoutes = require('./routes/userRoutes');

app.use(express.json());

// Use routes
app.use('/api/users', userRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Mock server running at http://localhost:${PORT}`);
});