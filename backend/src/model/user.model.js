const db = require ("./db.js");

const findOne = async (userId) => {
    try {
    const [user] = await db.query("SELECT * FROM users WHERE id = ?", [userId]);

    return user;
    } catch (err) {
        console.log(err);
    }
};

const findByEmail = async (email) => {
    try {
    const [user] = await db.query("SELECT * FROM users WHERE email = ?", [email]);

    return user;
    } catch (err) {
        console.log(err);
    }
};

const addOne = async (user) => {
    try {
    const { firstName, lastName, email, password } = user;
    const [result] = await db.query("INSERT INTO users (firstname, lastname, email, password) VALUES (?, ?, ?, ?)", [firstName, lastName, email, password]);

    return {id: result.insertId, firstName, lastName, email};
    } catch (err) {
        console.log(err);
    }
};

module.exports = { findOne, addOne, findByEmail };
