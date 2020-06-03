import React from 'react';
import PropTypes from 'prop-types';


const  MovieList = ({data,title}) => {
  return (
   <>
     <h1> {title} </h1>
     <ul>
       {data.map(movie => (
         <li key={movie.id}>
           {movie.amount} -- {movie.title}
         </li>
       ))}
     </ul>
   </>
 );
}

MovieList.propTypes = {
    data: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
};


export default MovieList;
