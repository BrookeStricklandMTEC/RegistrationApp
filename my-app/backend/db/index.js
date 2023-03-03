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


exports.addUser = (username, firstname, lastname, email, password) => {
    
    const values = [username, firstname, lastname, email, password]
    const query = "insert into users (username, email, hash ,firstName, lastName) VALUES ($1, $4, $5, $2, $3 )"
    pool.query(query, values, (err, res) => {
        console.log(err ? err.stack : res.rows)
    })
}

exports.uniqueUsername = (username) => {
    const value = [username]
    const query = "Select * from users WHERE username = '$1'"
    pool.query(query,values,(err,res) => {
        console.log("hit")
    })
}


// exports.addUser = (username, firstname, lastname, email, password) => {
//     pool.query("insert into users (username, email, hash ,firstName, lastName,) VALUES ("+ username+","+email+" , "+password+", "+firstname+", "+lastname+" )")  
    
// }

// const values = [username, firstname,lastname,email,password]
//     const query = "insert into users (username, email, hash ,firstName, lastName,) VALUES ($1, $4, $5, $2, $3 )"

//     client.query(query, values, (err, res) => {
//         console.log(err ? err.stack : res.rows)

//     })
// }

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
