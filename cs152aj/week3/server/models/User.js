
'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

//var userSchema = mongoose.Schema( {any:{}})

var userSchema = Schema( {
  googleid: String,
  googletoken: String,
  googlename:String,
  googleemail:String,
} );

module.exports = mongoose.model( 'User', userSchema );

/*
newUser.google.id    = profile.id;
newUser.google.token = token;
newUser.google.name  = profile.displayName;
newUser.google.email = profile.emails[0].value; // pull the first email
*/
