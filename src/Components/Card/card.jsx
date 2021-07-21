import React,{ useEffect, useState} from "react";
import { api } from "../../api";
import './card.css'
import { DetailsContext } from "../../context/moveDetails";
function Card(props) {
  const [movies, setMovies] = useState([{}]);
  const { setContextDetails } = React.useContext(DetailsContext);
  useEffect(() => {
    props.api
      .get()
      .then((response) => {
        setMovies(response.data.results);
        setContextDetails(response.data.results[0]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <>
      {movies.map((movie) => (
        <>
          <img
            onClick={() => setContextDetails(movie)}
            key={movie.id}
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.name}
            className={props.class}
          />
        </>
      ))}
    </>
  );
}

export default Card;
