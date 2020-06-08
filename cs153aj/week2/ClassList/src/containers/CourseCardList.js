import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CourseCard from '../components/Card/CourseCard';
import './CardList.css'

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: green;
`;



const CourseCardList = ({data}) => {
  return (
   <CardsWrapper>
     {data.map(course => (
       <div key={course.id} className='flex-container-element'>
         <CourseCard course={course} />
       </div>
     ))}
   </CardsWrapper>
 );
}

CourseCardList.propTypes = {
    data: PropTypes.array.isRequired,
};


export default CourseCardList;
