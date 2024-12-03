//backend/middleware/AuthMiddleware.js

const jwt = require('jsonwebtoken');
const config = require('../config/config');

// JWT secret key
const JWT_SECRET = config.JWT_SECRET || 'your_jwt_secret';

// Middleware to authenticate JWT token
exports.authenticateJWT = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];  // Expect 'Bearer <token>'

  if (!token) {
    return res.status(403).json({ message: 'Token required' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }

    req.user = user;  // Attach user info to the request
    next();
  });
};
