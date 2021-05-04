
import React, { useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MovieList from './Components/MovieList';
import AddMovie from './Components/AddMovie';
import Filter from'./Components/Filter';
import Rating from './Components/Rating';



  function App({history,movies,setmovies}) {

   
const [rate, setRate] = useState(0)
const handelrating=(rate) =>{
  setRate(rate);
};

const [searchTerm, setSearchTerm] = React.useState("");

  const handleChange =(searchTerm) => {
    setSearchTerm(searchTerm);
  };
 
  const handleAddNewMovie  =(NewMovie) => {
    setmovies([...movies,NewMovie])
   };
  
    
   return (
 
     <div className="App">
       <div>
         <h1 >Movies </h1>
       </div>
      <div>
         <Filter searchTerm={searchTerm}  handleChange={handleChange}></Filter>
      </div>
        <div className="star">
          <Rating handelrating={handelrating} rate={rate}></Rating>
        </div>
        <div>
          <MovieList movies={movies.filter(elm =>
     elm.title.toLowerCase().includes((searchTerm).toLowerCase())&& elm.rating >=rate)}> </MovieList> 
        </div>
        <AddMovie handleAddNewMovie={handleAddNewMovie}> </AddMovie>
        
     </div>
   )
 
   }
  

export default App
