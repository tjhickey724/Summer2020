'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const reviewSchema = Schema( {
  subject: String,
  courseNum: String,
  section: String,
  term: String,
  reviewer: String,
  review: String
});

module.exports = mongoose.model('Review',reviewSchema);
