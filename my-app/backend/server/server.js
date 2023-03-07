const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000; 

const passport = require('passport');
const initializePassport = require('../auth/passport-config');
const session = require('express-session');

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
  console.log(req.body.username);
  console.log(req.body.password);
  console.log(req.user)
  res.json({ message: "Success", "isadmin": req.user.isadmin })
}) 

// possible admin function 

// app.post('/admindashboard','/dashboard',
// passport.authenticate('local', {}), (req,res) => {
//   console.log(req.body.isadmin)
//   res.json({ message: "Successfully logged in admin" })
// }) 


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

app.get('/api/logout', (req, res) => {
  res.logOut();
  req.flash('success_msg', "You have logged out");
  res.redirect('/api/login')
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
});