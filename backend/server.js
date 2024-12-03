// backend/server.js

const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth/authRoutes');
const errorController = require('./controllers/error/error');
const authenticateJWT = require('./middleware/AuthMiddleware').authenticateJWT;
const { testDbConnection } = require('./util/database'); 
require('dotenv').config();

const app = express();

// Middleware to parse JSON requests
app.use(bodyParser.json());

// CORS middleware
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

// Test the database connection when the server starts
async function initializeServer() {
    try {
        // Test DB connection
        await testDbConnection();

        const port = process.env.PORT || 3000;

        // Define the routes
        app.use('/auth', authRoutes);

        // Error handling middleware
        app.use(errorController.get404);
        app.use(errorController.get500);

        // Start the server
        app.listen(port, () => {
            console.log(`Listening on port ${port}`);
        });
    } catch (error) {
        console.error('Error initializing server:', error.message);
        process.exit(1);  // Exit the process with an error code
    }
}

// Initialize the server
initializeServer();
