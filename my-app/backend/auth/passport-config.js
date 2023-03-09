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
          console.log(err);
        }

        console.log(results.rows);

        if (results.rows.length > 0) {
          const user = results.rows[0]
      
          user.hash = bcrypt.hashSync(password, 10)
          bcrypt.compare(password, user.hash, (err, isMatch) => {
            if (err) {
              throw err
            }
            if (isMatch ) {
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

function grabCourses(courses, done) {
  const allCourses = (courses, done) => {
    pool.query(
      `SELECT * from courses WHERE courses = $1`,
      [courses],
      (err, results) => {
        if (err) {
          console.log(err);
        }
        console.log(results.row)
        if (results.row.length > 0) {
          const courses = results.row[0]
          console.log(courses); 
          if(err){
            console.log(err); 
          }
        }
      }
    )
  }
}

passport.use(
    new LocalStrategy({
      usernameField: "username",
      passwordField: "password",
      adminField: "isadmin",
      coursesField: "courses",
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