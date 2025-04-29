const express = require('express');
const router = express.Router();
const users = require('../data/users.json');

// GET all users
router.get('/', (req, res) => {
  res.json(users);
});

// GET user by ID
router.get('/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// POST create new user (mock only, not saved)
router.post('/', (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1; // mock ID generation
  res.status(201).json(newUser);
});

module.exports = router;