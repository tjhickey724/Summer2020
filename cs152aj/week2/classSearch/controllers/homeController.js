"use strict";

const facdata = require("../private/json/facdata.json")
const courses = require("../private/json/courses.json")

console.log(`courses.length = ${courses.length}`)
console.log(JSON.stringify(courses[0],null,2))
console.log(`facdata.length = ${facdata.length}`)
console.log(JSON.stringify(facdata[0],null,2))

var OLDcourses = [
  {
    title: "Event Driven Cakes",
    cost: 50
  },
  {
    title: "Asynchronous Artichoke",
    cost: 25
  },
  {
    title: "Object Oriented Orange Juice",
    cost: 10
  }
];

exports.showCourses = (req, res) => {
  res.render("courses", {
    courses: [],
    instructor:"none",
    image_url:""
  });
};

exports.showSelectedCourses = (req, res) => {
  const email = req.body.email;
  const selected_courses =
      courses.filter(course =>
          course['instructor'][2]==email
          &&
          ! course['independent_study']
        )
  const [faculty] = facdata.filter(fac =>
    fac.email==email
  )
  console.log("faculty = ")
  console.log(JSON.stringify(faculty,null,2))
  res.render("courses", {
    courses: selected_courses,
    instructor:email,
    image_url:faculty.image_url
  });
};

exports.showSignUp = (req, res) => {
  res.render("contact");
};

exports.postedSignUpForm = (req, res) => {
  let formData = req.body
  res.render("thanks",{formData:formData});
};
