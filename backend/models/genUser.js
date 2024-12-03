const db = require('../util/database');

module.exports = class GenUser{
    constructor(username, password) {
        this.username = username;
        this.password = password;

    }

    static find(username){
        return db.execute('SELECT * FROM gen_users WHERE username = ?', [username]);
    }

    static save(user) {
        return db.execute(
            'INSERT INTO gen_users (username, password) VALUES (?, ?)',
            [user.username, user.password]
        );
    }
    
}