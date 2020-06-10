'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const contactSchema = Schema( {
  name: String,
  email: String
});

module.exports = mongoose.model('Contact',contactSchema);
