// backend/validator/validation.js

const { body } = require('express-validator');
const GenUser = require('../models/genUser');

// Validation for sign up
exports.signupValidation = [
    body('username').trim().not().isEmpty().withMessage('Username is required.'),
    // body('email')
    //     .isEmail()
    //     .withMessage('Please enter a valid email.')
    //     .custom(async (email) => {
    //         const user = await GenUser.find(email);
    //         if (user[0].length > 0) {
    //             return Promise.reject('Email address already exists!');
    //         }
    //     })
    //     .normalizeEmail(),
    body('password')
        .trim()
        .isLength({ min: 7 })
        .withMessage('Password must be at least 7 characters long.')
];

// Validation for login
exports.loginValidation = [
    body('username').trim().not().isEmpty().withMessage('Please enter a correct username'),
    body('password')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Password is required')
];
