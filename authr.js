// Authr JS
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// ✅ POST route for registering
router.post('/register', authController.registerUser);

module.exports = router;
