// backend/routes/auth/authRoutes.js

const express = require('express');
const router = express.Router();

const authController = require('../../controllers/AuthController/AuthController');
const { signupValidation, loginValidation } = require('../../validator/userValidation');

// Sign up route
router.post('/signup', signupValidation, authController.signup);

// Login route
router.post('/login', loginValidation, authController.login);

// Logout route (client handles the actual token deletion)
router.post('/logout', authController.logout);

module.exports = router;
