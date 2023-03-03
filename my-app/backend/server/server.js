const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000; 
const passport = require('passport');
const initializePassport = require('../auth/passport-config');
const session = require('express-session');

app.use(express.urlencoded({extended:false}))

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


// app.post('/login', passport.authenticate('local', {

//   successRedirect: '/dashboard',
//   failureRedirect: '/login',
//   failureFlash: true, // do this but make it so it works for react

// }));


passport.authenticate('/login', (err, user, info) => {
  res.json({ message: "Success" })
  console.log('hit');
})


function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    // return res.redirect("/dashboard"); change
  }
  next();
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  // res.redirect("/login"); change
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