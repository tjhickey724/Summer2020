
'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

var userInfoSchema = Schema( {
  key: String,
  value: String,
  deviceId: String,
  createdAt: Date,
  updatedAt: Date,
} );

module.exports = mongoose.model( 'UserInfo', userInfoSchema );
