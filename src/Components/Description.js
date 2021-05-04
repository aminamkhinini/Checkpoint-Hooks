import { Button } from "react-bootstrap";
import React from "react";

const Description = ({ movies, match, history }) => {
  return (
    <div className="description">
      <h1> Description Movie</h1>
      <p>
        {movies.find((movies) => movies.id === match.params.id).description}
      </p>

      <div>
        <iframe
          width="560"
          height="315"
          src={movies.find((movies) => movies.id === match.params.id).trailer}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

    

        <Button variant="success" onClick={() => history.push("/")}>
          Page Acceuil
        </Button>
      
    </div>
  );
};
export default Description;
