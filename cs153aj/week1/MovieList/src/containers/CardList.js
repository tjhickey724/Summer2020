import React from 'react';
import PropTypes from 'prop-types';

import Card from '../components/Card/Card';
import './CardList.css'

const CardList = ({data}) => {
  return (
   <div className='flex-container'>
     {data.map(movie => (
       <div key={movie.id} className='flex-container-element'>
         <Card movie={movie} />
       </div>
     ))}
   </div>
 );
}

CardList.propTypes = {
    data: PropTypes.array.isRequired,
};


export default CardList;
