

//help: npm run devStart not functional 
// if(process.env.NODE_ENV !== 'production'){
//     require('dotenv').config()
// }

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
const cors = require('cors')
app.use(express.json())

app.use(express.urlencoded({ extended: false }))
const reactClientURL = 'http://localhost:3000' // react client

app.use(cors({
  origin: reactClientURL, // <-- location of the react app were connecting to
  credentials: true,
})
)


app.get('/api/login', db.getLogin)

app.get('/api/courses', db.getCourses)

app.post("/addUser", (req, res) => {
  console.log("post add User: ", ` ${req.body.username} `);
  db.addUser(req.body.username, req.body.firstname, req.body.lastname, req.body.email, req.body.password)
  res.json({ message: "Success" })
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