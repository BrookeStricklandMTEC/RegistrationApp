//help: npm run devStart not functional 
// if(process.env.NODE_ENV !== 'production'){
//     require('dotenv').config()
// }

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; 
const db = require('.././db/index')

const { Pool } = require('../db/index.js');  
const bcrypt = require('bcrypt');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
const methodOverride = require('method-override');


app.use(express.urlencoded({extended:false}))

app.get('/api', db.getUsers)



// const users = [];

// const initializePassport = require('../auth/passport-config')
// initializePassport(
//     passport, email => { 
//     users.find(user => user.email === email)
//     id => users.find(user => user.id === id) 
// })

// app.use(express.urlencoded({extended: false})) // send details from frontend to backend
// app.use(flash())
// app.use(session({
//     secret: process.env.SESSION_SECRET, //this will need to be updated to what is in .env now
//     resave: false, 
//     saveUninitialized: false,
// }))

// app.use(passport.initialize())
// app.use(passport.session())
// app.use(methodOverride('_method'))

// app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
//     successRedirect: '/',
//     failureRedirect: '/login',
//     failureFlash: true
// }))

// app.post('/register', checkNotAuthenticated, async (req, res) => {
//     try{
//         const hashedPassword = await bcrypt.hash(req.body.password, 10)
//         //users.push({push database info, id:, name:, email:, password})
//         res.redirect('/login')
//     } catch {
//         res.redirect('/register')
//     }
// })

// app.delete('logout', (req,res) => {
//     req.logOut()
//     res.redirect('/login')
// })

// function checkAuthenticated(req,res,next) {
//     if (req.isAuthenticated()){
//         return next()
//     }

//     res.redirect('/login')
// }

// function checkNotAuthenticated(req,res,next) {
//     if (req.isAuthenticated()){
//         return res.redirect('/')
//     }
//     next()
// }

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
});