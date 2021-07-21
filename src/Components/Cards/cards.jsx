import React, { Fragment, useState } from "react";
import "./cards.css";
import Card from '../Card/card'
import { api } from "../../api";
import Next from "../NextBtn/next";
import Previous from "../previousBtn/previous";
export default function Cards() {
  
  
  return (
    <Fragment>
    <h3 className="cards-title">Últimos lançamentos</h3>
      <div className="cards">
      <Next class={".card-img-1"} />
      <Previous class={".card-img-1"} />
        <Card api={api.popularMovies} class={"card-img-1"} />
      </div>

    <h3 className="cards-title">Mais avaliados</h3>
      <div className="cards">
      <Next class={".card-img-2"} />
      <Previous class={".card-img-2"} />
        <Card api={api.mostRatedMovies} class={"card-img-2"}/>
      </div>

    </Fragment>
  );
}
