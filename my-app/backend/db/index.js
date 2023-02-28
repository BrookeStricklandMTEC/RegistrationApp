// -----postgres cool stuff---------

const Pool = require('pg').Pool;

let dbURL = {
    connectionString: process.env.DATABASE_URL   || 'postgres://postgres:postgres@localhost:5432/registration-app' 
}

const pool = new Pool(dbURL);

pool.connect();

exports.getUsers = (req, res) => {
    pool.query('SELECT * FROM users', (err, results) => {
        if (err) throw err;
        for (let row of results.rows) {
            console.log(JSON.stringify(row));
        }
        res.status(200).json(results.rows);
    })
}

exports.authUserByName = async (username) => {
    const results = await 
    pool.query('SELECT * from users', [username]) 
    return json(results.rows[0]);
}

// 


// require('dotenv').congig();
// const { Pool } = require('pg')

//     const connectionString = `postgresql://
//     ${process.env.DB_USER}:${process.env.DB_PASSWORD}
//     @${process.env.DB_HOST}: ${process.env.DB_PORT}
//     /${process.env.DB_DATABASE}`

// const pool = new Pool({
//     connectionString: isProduction ? process.env.DATABASE_URL : connectionString
// });

// exports.authUserByName = async (username) => {
//     const results = await 
//     pool.query('SELECT * from users where username = $1', [username]) 
//     return json(results.rows[0]);
// }

// module.exports = { pool };
