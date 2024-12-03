// backend/service/userService.js

const bcrypt = require('bcryptjs');
const GenUser = require('../models/genUser');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

// JWT secret key
const JWT_SECRET = config.JWT_SECRET || 'your_jwt_secret';

// Create a new user (Sign up)
exports.createUser = async (username, password) => {
    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 15);

        // Save user in the database
        const user = { username, password: hashedPassword };
        const result = await GenUser.save(user);

        return { message: 'User Registered!' };
    } catch (err) {
        throw new Error('Error creating user: ' + err.message);
    }
};

// Find a user by email (for login)
exports.findUserByUsername = async (username) => {
    try {
        const result = await GenUser.find(username);
        return result[0][0]; // Returns the first user if found
    } catch (err) {
        throw new Error('Error finding user: ' + err.message);
    }
};

// Generate JWT token after successful login
exports.generateToken = (user) => {
    return jwt.sign(
        { id: user.id, username: user.username, },
        JWT_SECRET,
        { expiresIn: '1h' } // Token expires in 1 hour
    );
};
