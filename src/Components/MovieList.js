import React from 'react';
import { CardDeck } from 'react-bootstrap';
import MovieCard from './MovieC'

 const MovieList =(props) =>{
return <div >
    <h1> Liste Movies</h1>
    <CardDeck className="MovieList" >{props.movies.map( el => <MovieCard movie={el}></MovieCard>)}</CardDeck>

</div>
 }
 export default MovieList