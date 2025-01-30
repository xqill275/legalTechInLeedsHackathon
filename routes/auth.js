// Import required modules
const express = require('express');
const authController = require('../controllers/auth');

// Create router instance
const router = express.Router();

// Apply body-parsing middleware
router.use(express.json());

// Define routes
router.post('/login', authController.login);

// Export router
module.exports = router;