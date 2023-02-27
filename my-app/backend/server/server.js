//help: npm run devStart not functional 
// if(process.env.NODE_ENV !== 'production'){
//     require('dotenv').config()
// }

// const express = require('express');
// const app = express();
// const bcrypt = require('bcrypt');
// const passport = require('passport')
// const flash = require('express-flash')
// const session = require('express-session')
// const methodOverride = require('method-override')

// const users = [] 

// const initializePassport = require('../auth/passport-config')
// initializePassport(
//     passport, email => { 
//     users.find(user => user.email === email)
//     id => users.find(user => user.id === id) 
// })

// app.use(express.urlencoded({extended: false}))
// app.use(flash())
// app.use(session({
//     secret: process.env.SESSION_SECRET,
//     resave: false, 
//     saveUninitialized: false,
// }))

// app.use(passport.initialize())
// app.use(passport.session())
// app.use(methodOverride('_method'))

// app.get('/',checkAuthenticated, (req, res) => {
//     res.render('App.js') //pass in req.user.name from db ?  
// })

// app.get('/login', checkNotAuthenticated, (req,res) => {
//     res.render('/login') 
// })

// app.get('/register', checkNotAuthenticated, (req,res) => {
//     res.render('register.js') 
// })

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

// app.listen(4000, () => {
//     console.log('listening on port 4000')
// });