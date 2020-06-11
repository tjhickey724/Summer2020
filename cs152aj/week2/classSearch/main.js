"use strict";

const express = require("express"),
  app = express(),
  homeController = require("./controllers/homeController"),
  errorController = require("./controllers/errorController"),
  layouts = require("express-ejs-layouts");

const mongoose = require("mongoose");
mongoose.connect(
   'mongodb://localhost/classSearch',
   {useNewUrlParser:true})
const db = mongoose.connection;
db.on('error',(x)=>console.log("connection error"+x))
db.once('open',(x)=>console.log("We connected at "+new Date()+x))




app.set("view engine", "ejs");
app.set("port", process.env.PORT || 3000);
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());
app.use(layouts);
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/courses", homeController.showCourses);
app.post("/courses", homeController.showSelectedCourses);
app.get("/courses/:email", homeController.showSelectedCourses);

app.get("/contact", homeController.showSignUp);
//app.post("/contact", homeController.postedSignUpForm);

const Contact =require("./models/Contact")
app.get("/showContacts",
   async (req,res,next) => {
     try {
       res.locals.contacts = await Contact.find({})
       //res.json(res.locals.contacts)
       res.render('showContacts')
     }
     catch(e){
       next(e)

     }
   });

app.post('/contact',
  async (req,res,next) => {
    try {
      let name = req.body.name
      let email = req.body.email
      let newContact = new Contact({name:name, email:email})
      await newContact.save()
      res.redirect('/showContacts')
    }
    catch(e) {
      next(e)
    }
  })

app.get("/writeReview/:subj/:num/:sec/:term",
  (req,res) => {
    res.render("writeReview",req.params)
  }
)

const Review = require('./models/Review')


app.post("/addReview",
  async (req,res,next) => {
    try {
      let newReview = new Review({
        subject: req.body.subj,
        courseNum: req.body.num,
        section: req.body.sec,
        term: req.body.term,
        reviewer: req.body.reviewer,
        review: req.body.review
      })

      await newReview.save()
      res.redirect(`/showReviews/${
                  req.body.subj}/${
                  req.body.num}/${
                  req.body.sec}/${
                  req.body.term}`)
    }
    catch(e){
      next(e)
    }
  }
)

app.get("/showReviews/:subj/:num/:sec/:term",
  async (req,res,next) => {
    try{
      const query={
        subject:req.params.subj,
        courseNum:req.params.num,
        section:req.params.sec,
        term:req.params.term,
      }
      res.locals.reviews =
         await Review.find(query)
      res.locals.subj = req.params.subj
      res.locals.num = req.params.num
      res.locals.sec = req.params.sec
      res.locals.term = req.params.term
      res.render('showReviews')
    }
    catch(e){
      next(e)
    }
  }
)

app.get("/showReviews/:subj/:num/:sec/:term/json",
  async (req,res,next) => {
    try{
      const query={
        subject:req.params.subj,
        courseNum:req.params.num,
        section:req.params.sec,
        term:req.params.term,
      }
      res.locals.reviews =
         await Review.find(query)
      res.locals.subj = req.params.subj
      res.locals.num = req.params.num
      res.locals.sec = req.params.sec
      res.locals.term = req.params.term
      res.json(res.locals.reviews)
    }
    catch(e){
      next(e)
    }
  }
)


app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});
