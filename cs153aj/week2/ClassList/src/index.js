import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import CourseCardList from './containers/CourseCardList';
import CourseList from './containers/CourseList';

import courseData from '../assets/courses.json'
import facultyData from '../assets/facdata.json'

let courses = courseData.filter(course=>
   course.subject=='LING' && ! course.independent_study)

courses.forEach(course =>
  { // add id and image_url fields to the course
    course['id']=course.subject+":"+course.coursenum+":"+course.section+":"+course.term;
    const email = course.instructor[2];
    const faculty = facultyData.filter(fac => fac.email==email)
    course['faculty'] = faculty[0] || {image_url:'/media/avatar.jpg'}
 })
 courses.sort((c1,c2) => (c2.enrolled -c1.enrolled))


const App = () => {
  return (
   <>
    <div className="jumbotron">
    <h1>Recent Computer Science Courses</h1>
    <p>This shows the CS courses from Fall 2019 through Summer 2020</p>
    </div>




    <div className='container-fluid'>
      <nav className='navbar sticky-top navbar-light bg-dark'>
        <h1 className='navbar-brand text-light'>Summer 2020 Courses</h1>
      </nav>

      <CourseCardList data={courses.filter(course => (course.term==1202))} />

    </div>

    <div className='container-fluid'>
      <nav className='navbar sticky-top navbar-light bg-dark'>
        <h1 className='navbar-brand text-light'>Spring 2020 Courses</h1>
      </nav>

      <CourseCardList data={courses.filter(course => (course.term==1201))} />

    </div>

    <div className='container-fluid'>
      <nav className='navbar sticky-top navbar-light bg-dark'>
        <h1 className='navbar-brand text-light'>Fall 2019 Courses</h1>
      </nav>

      <CourseCardList data={courses.filter(course => (course.term==1193))} />

    </div>


    <div>
      <h2>Data size</h2>
      <p>
        number of courses is {courses.length}
        </p><p>
        number of faculty is {facultyData.length}
      </p>
    </div>


    <CourseList data={courses} title="List of recent COSI Courses" />


    <h1>Example of a Course JSON object</h1>
    <pre>
    {JSON.stringify(courses[0],null,2)}
    </pre>
    <h1> Example of a Faculty JSON object</h1>
    <pre>
    {JSON.stringify(facultyData[0],null,2)}
    </pre>
   </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
