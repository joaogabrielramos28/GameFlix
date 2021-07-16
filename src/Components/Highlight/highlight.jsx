import React from "react";
import api from "../../api";
import banner from "../../assets/banner.png";
import {FaShoppingCart} from 'react-icons/fa'
import "./highlight.css";
function Highlight() {
  return (
    <div className="highlight">
      <img src={banner} alt="" />

      <div className="highlight-content">
        <h2 className="game-title">Call of duty Warzone</h2>

        <p className="game-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, facere
          reiciendis. Quo nisi in animi, dolor cupiditate, quia repellendus,
          similique necessitatibus ex mollitia ducimus corrupti aliquam
          molestiae rem soluta! Tempora?
        </p>

        <button className="game-shop">Buy <FaShoppingCart size={"1rem"} /></button>
      </div>
    </div>
  );
}

export default Highlight;
