import React, { useState } from 'react';
import { Route, Switch } from "react-router-dom";
import App from '../App';
import { v4 as uuidv4 } from 'uuid';
import Description from "./Description";


const RountingComponent = () => {
    const[movies,setmovies]= useState([

        {id:uuidv4(),
           title: "SOUL",
           description:"Au moment où Joe pense que son rêve est désormais à portée de main, un pas malencontreux l’expédie dans un endroit fantastique où il est obligé de réfléchir à nouveau à la signification d’avoir une âme. C’est là qu’il se lie d’amitié avec 22, une âme qui ne pense pas que la vie sur Terre soit aussi bien que ce qu’on veut bien lui faire croire.",
           posterURL: "https://media.senscritique.com/media/000019769926/source_big/Soul.jpg",
           rating:4,
           trailer:"https://www.youtube.com/embed/xOsLIiBStEs",
         
          },
          {id:uuidv4(),
           title: "TENET",
           description:"Muni d’un seul mot – Tenet – et décidé à se battre pour sauver le monde, notre protagoniste sillonne l’univers crépusculaire de l’espionnage international. Sa mission le projettera dans une dimension qui dépasse le temps. Pourtant, il ne s’agit pas d’un voyage dans le temps, mais d’un renversement temporel… ",
           posterURL: "https://media.senscritique.com/media/000019525188/source_big/Tenet.jpg",
           rating: 4,
           trailer:"https://www.youtube.com/embed/AZGcmvrTX9M",
          },
          {id:uuidv4(),
           title: "Bad Boys for life",
           description:"Les Bad Boys Mike Lowrey et Marcus Burnett se retrouvent pour résoudre une ultime affaire. ",
           posterURL: "https://media.senscritique.com/media/000019056516/source_big/Bad_Boys_for_Life.jpg",
           rating: 5,
           trailer:" https://www.youtube.com/embed/R228yPrwqTo",
          },
          { id:uuidv4(),
           title: "La Voix de La Justice",
           description:"Le combat historique du jeune avocat Bryan Stevenson. Après ses études à l’université de Harvard, Bryan Stevenson aurait pu se lancer dans une carrière des plus lucratives. Il décide pourtant de se rendre en Alabama pour défendre ceux qui ont été condamnés à tort, avec le soutien d’une militante locale, Eva Ansley. ",
           posterURL: "https://media.senscritique.com/media/000019142368/source_big/1917.jpg",
           rating: 3,
           trailer:"https://www.youtube.com/embed/x_d7ofGSCdY",
          },
          {id:uuidv4(),
           title: "En Avant",
           description:"Dans la banlieue d’un univers imaginaire, deux frères elfes se lancent dans une quête extraordinaire pour découvrir s’il reste encore un peu de magie dans le monde. ",
           posterURL: "https://media.senscritique.com/media/000019124507/source_big/En_avant.jpg",
           rating: 3,
           trailer:"https://www.youtube.com/embed/0hZwKwF3Y04" ,
          },
         ]
         );
    return (
        <div>
            
            <Switch> 
              <Route exact path="/"render={(props)=><App {...props} movies={movies} setmovies={setmovies}></App>}></Route>
              <Route exact path="/description/:id" render={(props)=><Description {...props} movies={movies} ></Description>}></Route>
            </Switch>
            
        </div>
    )
}

export default RountingComponent
