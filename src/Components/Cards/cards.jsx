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
      <h3 className="cards-title">Recém chegados</h3>
      <div className="cards">
      <Next class={".card-img-3"} />
      <Previous class={".card-img-3"} />
      <Card api={api.upComingMovies} class={"card-img-3"}/>
      </div>
      <h3 className="cards-title">Populares</h3>
      <div className="cards">
      <Next class={".card-img-4"} />
      <Previous class={".card-img-4"} />
      <Card api={api.peoplePopularMovies} class={"card-img-4"}/>
      </div>

    </Fragment>
  );
}
