import React from 'react';
import PropTypes from 'prop-types';

const CourseCard = ({ course }) => {
  return (
    <div className='card'>

      <div className='card-body'>
        <h2 className='card-title'>{course.id}</h2>

      </div>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item'>Enrolled: {course.name}</li>
        <li className='list-group-item'>Instructor:
            {course.instructor[0]} {course.instructor[1]} {course.instructor[2]}</li>
        <li className='list-group-item'>Enrolled: {course.enrolled}</li>
      </ul>
      <img src={course.faculty.image_url} className='card-img-top' alt="faculty photo" />
    </div>
  );
};

CourseCard.propTypes = {
  course: PropTypes.object.isRequired
}
/*
Card.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    distributor: PropTypes.string,
    year: PropTypes.number,
    amount: PropTypes.string,
    img: PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
    }),
    ranking: PropTypes.number,
  }).isRequired,
};
*/
export default CourseCard;
