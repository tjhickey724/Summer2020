import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Card from '../components/Card/Card';
import './CardList.css'

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: green;
`;



const CardList = ({data}) => {
  return (
   <CardsWrapper>
     {data.map(movie => (
       <div key={movie.id} className='flex-container-element'>
         <Card movie={movie} />
       </div>
     ))}
   </CardsWrapper>
 );
}

CardList.propTypes = {
    data: PropTypes.array.isRequired,
};


export default CardList;
