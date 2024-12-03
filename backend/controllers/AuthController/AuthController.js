// backend/controllers/AuthController/AuthController.js

const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const userService = require('../../services/userService');
const { signupValidation, loginValidation } = require('../../validator/userValidation');

// Sign up (already present)
exports.signup = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    const { username, password } = req.body;

    try {
        const result = await userService.createUser(username, password);
        res.status(201).json(result);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

// Login
exports.login = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    const { username, password } = req.body;

    try {
        const user = await userService.findUserByUsername(username);

        if (!user) {
            return res.status(401).json({ message: 'Invalid username' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        const token = userService.generateToken(user);

        res.json({
            message: 'Login successful',
            token,
            redirectUrl: '/dashboard'
        });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

// Logout (JWT is stateless, so it's just a front-end operation to delete the token)
exports.logout = (req, res) => {
    res.json({ message: 'Logged out successfully' });
};
