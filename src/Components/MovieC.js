
import React from 'react';
import {Card, Button} from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
{/*import Trailer from './Trailer'*/}

export default function MovieCard({movie}) {
    return (
      
     
  <Card className="card">
   
    <Card.Img variant="top" src={movie.posterURL} />
    <Card.Body>
      <Card.Title className="title">{movie.title}</Card.Title>
      <Button variant="outline-info"> <Link to={`/description/${movie.id}`}>Description</Link>  </Button>
     
    
      <Card.Footer>
       <ReactStars edit={false} value={movie.rating}></ReactStars>
      </Card.Footer>
    </Card.Body>
   
  </Card>

    
    )
}

