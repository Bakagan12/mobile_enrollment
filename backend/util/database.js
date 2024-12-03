const mysql = require('mysql2');
const config = require('../config/config.json');  // Adjust if necessary

const pool = mysql.createPool({
    host: config.host,
    user: config.user,
    database: config.database,
    password: config.password
});

// Export pool with promise support
module.exports = pool.promise();

// Function to test database connection
async function testDbConnection() {
    try {
        const connection = await pool.promise().getConnection();
        console.log('Database connected successfully!');
        connection.release();  // Always release the connection back to the pool
    } catch (err) {
        console.error('Database connection failed:', err);
    }
}

// Export testDbConnection function to be used in the server
module.exports.testDbConnection = testDbConnection;
