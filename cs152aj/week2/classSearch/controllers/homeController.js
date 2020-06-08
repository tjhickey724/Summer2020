"use strict";

const facdata = require("../private/json/facdata.json")
const courses = require("../private/json/courses.json")

courses.forEach(course => {
  const [fac] = facdata.filter(f=>f.email==course.instructor[2])
  const faculty = fac || {image_url:"none"}
  course['faculty']=faculty
})

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
    faculty: facdata,
    term: "Fall19-Fall20",
    instructor:"anyone",
    department:"any",
    image_url:""
  });
};

exports.showSelectedCourses = (req, res) => {
  let email = req.body.email
        || req.params.email
  let term = req.body.term
  let department = req.body.department

  const selected_courses =
      courses.filter(course =>
        ( (!email) || course['instructor'][2]==email )
        &&
        (! course['independent_study'])
        &&
        ( (!department) || course['subject']==department)
        &&
        (!req.body.term || course['term']==req.body.term)
        )
  const [faculty] = facdata.filter(fac =>
    fac.email==email
  )

  selected_courses.sort(
    (c1,c2) => (c2.enrolled-c1.enrolled)
  )

  console.log("faculty = ")
  console.log(JSON.stringify(faculty,null,2))
  res.render("courses", {
    courses: selected_courses,
    faculty:facdata,
    term: req.body.term,
    instructor:email,
    department:department,
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
