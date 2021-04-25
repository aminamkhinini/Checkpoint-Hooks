import React from 'react';
import {Card} from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";

export default function MovieCard({movie}) {
    return (
      
     
  <Card className="card">
    <Card.Img variant="top" src={movie.posterURL} />
    <Card.Body>
      <Card.Title className="title">{movie.title}</Card.Title>
      <Card.Text>{movie.description}</Card.Text>
      <Card.Footer>
       <ReactStars edit={false} value={movie.rating}></ReactStars>
      </Card.Footer>
    </Card.Body>
  </Card>

    
    )
}

