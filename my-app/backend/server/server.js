const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; 
const db = require('.././db/index')

const bcrypt = require('bcrypt');
const passport = require('passport');
const flash = require('express-flash');
const initializePassport = require('../auth/passport-config');
const session = require('express-session');
const methodOverride = require('method-override');


app.use(passport.initialize());
app.use(passport.session());


initializePassport(passport);


app.use(express.urlencoded({extended:false}))


app.get('/api/login', db.getLogin)

app.get('/api/courses', db.getCourses)





app.post('api/login', passport.authenticate('local', {
  successRedirect: 'api/dashboard',
  failureRedirect: 'api/login',
  failureFlash: true
}));

app.get('api/logout', (req, res) => {
  res.logOut();
  req.flash('success_msg', "You have logged out");
  res.redirect('api/login')
})

function checkAuthenticated(req,res,next){
 if(req.isAuthenticated()){
  return res.redirect('api/dashboard')
 }
 next();
}

function checkNotAuthenticated(req,res,next){
 if(req.isAuthenticated()){
  return next()
 } 
 res.redirect('api/login')
}


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
});