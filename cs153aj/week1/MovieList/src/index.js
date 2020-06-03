import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardList from './containers/CardList';

import movieData from '../assets/data.js'


const App = () => {
  return (
   <>
    <div className="jumbotron">
    <h1>Top Grossing Movies</h1>
    <p>This is a React demo showing how to create HTML from data</p>
    </div>

    <h1>Movie List</h1>
    <ul>
    {movieData.map(
        movie => (<li key={movie.id}>{movie.amount} -- {movie.title}</li>))}
    </ul>

    <div className='container-fluid'>
      <nav className='navbar sticky-top navbar-light bg-dark'>
        <h1 className='navbar-brand text-light'>MovieList</h1>
      </nav>

      <CardList data={movieData} />


    </div>
   </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
