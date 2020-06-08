import React from 'react';
import PropTypes from 'prop-types';


const  CourseList = ({data,title}) => {
  return (
   <>
     <h1> {title} </h1>
     <ul>
       {data.map(course => (

         <li key={course.id}>
           {course.id} -- {course.instructor} -- {course.enrolled}
         </li>

       ))}
     </ul>
   </>
 );
}

CourseList.propTypes = {
    data: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
};


export default CourseList;
