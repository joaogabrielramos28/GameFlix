import React,{ useEffect, useState} from "react";
import { api } from "../../../api";
import { DetailsContext } from "../../../context/moveDetails";
function CardFilter(props) {
  const [movies, setMovies] = useState([{}]);
  const { setContextDetails,searchMovie } = React.useContext(DetailsContext);
  useEffect(() => {
    props.api
      .get()
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((err) => {
        console.error(err);
      });

      
  },[]);

  useEffect(()=>{
    props.api2
      .get()
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  },[])
  console.log(movies);
  return (
    <>
      {movies.map((movie) => (
        <>
          <img
            onClick={() => setContextDetails(movie)}
            key={movie.id}
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            className={props.class}
          />
        </>
      ))}
    </>
  );
}

export default CardFilter;
