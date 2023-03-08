const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000; 
const passport = require('passport');
<<<<<<< HEAD
=======
const flash = require('express-flash');
>>>>>>> 95533d18d286f0cc557efeaa3dd1614055f7bd2a
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

<<<<<<< HEAD
app.use(passport.initialize());
app.use(passport.session());
=======

app.get('/api/login', db.getLogin)

app.get('/api/courses', db.getCourses)
>>>>>>> 95533d18d286f0cc557efeaa3dd1614055f7bd2a

initializePassport(passport);


// app.post('/login', passport.authenticate('local', {

//   successRedirect: '/dashboard',
//   failureRedirect: '/login',
//   failureFlash: true, // do this but make it so it works for react

// }));


passport.authenticate('/login', (err, user, info) => {
  res.json({ message: "Success" })
<<<<<<< HEAD
  console.log('hit');
=======
}) 




app.post('api/login', passport.authenticate('local', {
  successRedirect: 'api/dashboard',
  failureRedirect: 'api/login',
  failureFlash: true
}));

app.get('api/logout', (req, res) => {
  res.logOut();
  req.flash('success_msg', "You have logged out");
  res.redirect('api/login')
>>>>>>> 95533d18d286f0cc557efeaa3dd1614055f7bd2a
})

function checkAuthenticated(req,res,next){
 if(req.isAuthenticated()){
  return res.redirect('api/dashboard')
 }
 next();
}

<<<<<<< HEAD
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
=======
function checkNotAuthenticated(req,res,next){
 if(req.isAuthenticated()){
  return next()
 } 
 res.redirect('api/login')
}

>>>>>>> 95533d18d286f0cc557efeaa3dd1614055f7bd2a

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
});