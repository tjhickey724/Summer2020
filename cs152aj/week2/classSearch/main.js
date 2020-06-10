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
   async (req,res) => {
     try {
       res.locals.contacts = await Contact.find({})
       //res.json(res.locals.contacts)
       res.render('showContacts')
     }
     catch(theError){
       console.log("Error:")
       res.send("There was an error in /showContacts!")

     }
   });

app.post('/contact',
  async (req,res) => {
    try {
      let name = req.body.name
      let email = req.body.email
      let newContact = new Contact({name:name, email:email})
      await newContact.save()
      res.redirect('/showContacts')
    }
    catch(e) {
      res.send("error in addContact")
    }
  })

app.get("/writeReview/:subj/:num/:sec/:term",
   res.render("writeReview")
)


app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});
