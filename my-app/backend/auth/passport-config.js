const LocalStrategy = require("passport-local").Strategy
const db = require('../db/index')
const bcrypt = require('bcrypt')
const passport = require('passport')

function initialize(passport) {
  const authenticateUser = async (username, password, done) => {
    console.log(username);
<<<<<<< HEAD
    db.query(
      `SELECT * FROM users where username = $1`,
      [username],
      (err, results) => {
        if (err) {
          console.log(err);
        }
=======
>>>>>>> c87f6a8b71c99a5db62dd70bbee409b58cb9c7ea

    const user = await db.authUserByName(username)
    if (!user) return done(null, false)

    user.hash = bcrypt.hashSync(password, 10)

    const isMatch = bcrypt.compareSync(password, user.hash)

    if (!isMatch) return done(null, false);
    else return done(null, { username: user.username });
  }


function grabCourses(courses, done) {
  const allCourses = (courses, done) => {
    db.query(
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
<<<<<<< HEAD
    new LocalStrategy({
      usernameField: "username",
      passwordField: "password",
      adminField: "isadmin",
      coursesField: "courses",
    },
      authenticateUser
    )
=======
  new LocalStrategy({
    usernameField: "username",
    passwordField: "password",
    adminField: "isadmin",
  },
    authenticateUser
>>>>>>> c87f6a8b71c99a5db62dd70bbee409b58cb9c7ea
  )
)


<<<<<<< HEAD
passport.deserializeUser((id, done) => {
  db.query(
    `SELECT * FROM users WHERE username=$1`, [id], (err, results) => {
      if (err) {
        throw err;
      }
      return done(null, results.rows[0])
    }
  )
=======
passport.serializeUser((user, done) => {
  console.log(user)
  done(null, user)
>>>>>>> c87f6a8b71c99a5db62dd70bbee409b58cb9c7ea
})
passport.deserializeUser((id, done) => {
  const user = db.authUserByName(username)

  return done(null, user)

})
}
module.exports = initialize;