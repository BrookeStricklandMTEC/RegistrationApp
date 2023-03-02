// -----postgres cool stuff---------

const Pool = require('pg').Pool;

let dbURL = {
    connectionString: process.env.DATABASE_URL   || 'postgres://postgres:postgres@localhost:5432/registration-app' 
}

const pool = new Pool(dbURL);

pool.connect();

exports.getLogin = (req, res) => {
    pool.query("SELECT * FROM users", (err, results) => {
        if (err) throw err;
        for (let row of results.rows) {
            console.log(JSON.stringify(row));
        }
        res.status(200).json(results.rows);
    })
}


exports.getCourses = (req, res) => {
    pool.query("SELECT * FROM courses", (err, results) => {
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







