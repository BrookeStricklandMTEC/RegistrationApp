const LocalStrategy = require("passport-local").Strategy
const { pool } = require('../db/index')
const bcrypt = require('bcrypt')
const passport = require('passport')

function initialize(passport) {
  const authenticateUser = (username, password, done) => {
    console.log(username);
    pool.query(
      `SELECT * FROM users where username = $1`,
      [username],
      (err, results) => {
        if (err) {
          throw err;
        }

        console.log(results.rows);

        if (results.rows.length > 0) {
          const user = results.rows[0]
      
          console.log(user);
          user.hash = bcrypt.hashSync(password, 10)
          console.log(user.hash, password)
          bcrypt.compare(password, user.hash, (err, isMatch) => {
            if (err) {
              throw err
            }
            if (isMatch ) {
              if (user.isadmin === true){
                console.log(user.isadmin)
              } else {
                user.isadmin = false; 
                console.log(user.isadmin)
              }
              return done(null, user);
            } else {
              return done(null, false, { message: "Password is incorrect" })
            }
          });
        } else {
          return done(null, false, { message: "Email is not registered" });
        }
      }
    )
}


passport.use(
    new LocalStrategy({
      usernameField: "username",
      passwordField: "password",
    },
      authenticateUser
    )
  )
}

passport.serializeUser((user, done) => done(null, user.username));

passport.deserializeUser((id, done) => {
  pool.query(
    `SELECT * FROM users WHERE username=$1`, [id], (err, results) => {
      if (err) {
        throw err;
      }
      return done(null, results.rows[0])
    }
  )
})

module.exports = initialize; 