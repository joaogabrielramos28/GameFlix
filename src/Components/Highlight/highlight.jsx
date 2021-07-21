import React from "react";
import api from "../../api";
import banner from "../../assets/banner.png";
import {FaShoppingCart} from 'react-icons/fa'
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

        <a target="_blank" href={contextDetails.game_url}><button className="game-shop">Buy <FaShoppingCart size={"1rem"} /></button></a>
      </div>
    </div>
  );
}

export default Highlight;
