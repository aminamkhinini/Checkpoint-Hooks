
import React, { useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './Components/MovieList';
import { v4 as uuidv4 } from 'uuid';
import AddMovie from './Components/AddMovie';
import Filter from'./Components/Filter';
import Rating from './Components/Rating';


  function App() {
  const[movies,setmovies]= useState([

    {id:uuidv4(),
       title: "SOUL",
       description:"Au moment où Joe pense que son rêve est désormais à portée de main, un pas malencontreux l’expédie dans un endroit fantastique où il est obligé de réfléchir à nouveau à la signification d’avoir une âme. C’est là qu’il se lie d’amitié avec 22, une âme qui ne pense pas que la vie sur Terre soit aussi bien que ce qu’on veut bien lui faire croire.",
       posterURL: "https://media.senscritique.com/media/000019769926/source_big/Soul.jpg",
       rating:4,
      },
      {id:uuidv4(),
       title: "TENET",
       description:"Muni d’un seul mot – Tenet – et décidé à se battre pour sauver le monde, notre protagoniste sillonne l’univers crépusculaire de l’espionnage international. Sa mission le projettera dans une dimension qui dépasse le temps. Pourtant, il ne s’agit pas d’un voyage dans le temps, mais d’un renversement temporel… ",
       posterURL: "https://media.senscritique.com/media/000019525188/source_big/Tenet.jpg",
       rating: 4,
 
      },
      {id:uuidv4(),
       title: "Bad Boys for life",
       description:"Les Bad Boys Mike Lowrey et Marcus Burnett se retrouvent pour résoudre une ultime affaire. ",
       posterURL: "https://media.senscritique.com/media/000019056516/source_big/Bad_Boys_for_Life.jpg",
       rating: 5,
      },
      { id:uuidv4(),
       title: "La Voix de La Justice",
       description:"Le combat historique du jeune avocat Bryan Stevenson. Après ses études à l’université de Harvard, Bryan Stevenson aurait pu se lancer dans une carrière des plus lucratives. Il décide pourtant de se rendre en Alabama pour défendre ceux qui ont été condamnés à tort, avec le soutien d’une militante locale, Eva Ansley. ",
       posterURL: "https://media.senscritique.com/media/000019142368/source_big/1917.jpg",
       rating: 3,
      },
      {id:uuidv4(),
       title: "En Avant",
       description:"Dans la banlieue d’un univers imaginaire, deux frères elfes se lancent dans une quête extraordinaire pour découvrir s’il reste encore un peu de magie dans le monde. ",
       posterURL: "https://media.senscritique.com/media/000019124507/source_big/En_avant.jpg",
       rating: 3,
      },
     
    
     ]
     );
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
