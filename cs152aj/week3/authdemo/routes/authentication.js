const express = require('express');
const router = express.Router();

/*
this is a router to handle authentication
*/

const session = require("express-session")
const bodyParser = require("body-parser")
const flash = require('connect-flash')
const mongoose = require( 'mongoose' );
const MongoStore = require('connect-mongo')(session)

var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
// here we set up authentication with passport
const passport = require('passport')
const configPassport = require('../config/passport')
configPassport(passport)

router.use(session(
  {secret: 'zzbbyananaresasd4322',
   resave: false,
   saveUninitialized: false,
   cookie:{maxAge:24*60*60*1000}, // allow login for one day...
   store:new MongoStore({mongooseConnection: mongoose.connection})}))
router.use(flash());
router.use(passport.initialize());
router.use(passport.session());
router.use(bodyParser.urlencoded({ extended: false }));



const approvedLogins = ["tjhickey@brandeis.edu", "tjhickey724@gmail.com","csjbs2018@gmail.com"];

// here is where we check on their logged in status
router.use((req,res,next) => {
  res.locals.title="Authentication Demo"
  res.locals.loggedIn = false
  if (req.isAuthenticated()){
      res.locals.user = req.user
      res.locals.loggedIn = true
    }
  else {
    res.locals.loggedIn = false
  }
  next()
})


// here are the authentication routes

router.get('/loginerror', function(req,res){
  res.render('loginerror',{})
})

router.get('/login', function(req,res){
  res.render('login',{})
})



// route for logging out
router.get('/logout', function(req, res) {
        req.session.destroy((error)=>{console.log("Error in destroying session: "+error)});
        req.logout();
        res.redirect('/');
    });


// =====================================
// GOOGLE ROUTES =======================
// =====================================
// send to google to do the authentication
// profile gets us their basic information including their name
// email gets their emails
router.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));


router.get('/login/authorized',
        passport.authenticate('google', {
                successRedirect : '/',
                failureRedirect : '/loginerror'
        })
      );


// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
    res.locals.loggedIn = false
    if (req.isAuthenticated()){
      res.locals.loggedIn = true
      return next();
    } else {
      res.redirect('/login');
    }
}

router.isLoggedIn = isLoggedIn;

module.exports = router;
