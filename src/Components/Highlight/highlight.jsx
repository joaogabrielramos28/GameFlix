import React from "react";
import {GrPlayFill} from 'react-icons/gr'
import {AiOutlineInfoCircle} from 'react-icons/ai'
import "./highlight.css";
import { DetailsContext } from "../../context/moveDetails";
function Highlight() {
  const {contextDetails} = React.useContext(DetailsContext)
  return (
    <div className="highlight">
      <img src={`https://image.tmdb.org/t/p/w500/${contextDetails.backdrop_path}`} alt="" />

      <div className="highlight-content">
        <h2 className="game-title">{contextDetails.original_title}</h2>
       

        <p className="game-desc">
         {contextDetails.overview}
        </p>

        <span>Release: {contextDetails.release_date}</span>
        <div className="movie-btn">
        <a target="_blank" ><button className="movie-play"> <GrPlayFill /> Play</button></a>
        <a target="_blank" ><button className="movie-info"> <AiOutlineInfoCircle size={"1.5em"} /> More info</button></a>

        </div>
      </div>
    </div>
  );
}

export default Highlight;
