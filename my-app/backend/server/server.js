const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000; 
const db = require('.././db/index')

const bcrypt = require('bcrypt');
const passport = require('passport');
const flash = require('express-flash');
const initializePassport = require('../auth/passport-config');
const session = require('express-session');
const methodOverride = require('method-override');

app.use(express.urlencoded({extended:false}))

app.use(express.json());

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 10000 },
  })
);

app.use(passport.initialize());
app.use(passport.session());

initializePassport(passport);

app.post('/login', 
passport.authenticate('local', {}), (req,res) => {
  console.log(req.body.username)
  console.log(req.body.password);
  res.json({ message: "Success" })
}) 

passport.authenticate('/login', (err, user, info) => {
  console.log('hit');
  res.json({ message: "Success" })
})


function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect("/dashboard");
  }
  next();
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}


// logout function

// app.get('/api/logout', (req, res) => {
//   res.logOut();
//   req.flash('success_msg', "You have logged out");
//   res.redirect('/api/login')
// })

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
});