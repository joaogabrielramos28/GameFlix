import React, { Fragment, useContext, useState } from "react";
import "./cards.css";
import Card from '../Card/card'
import CardFilter from "../Card/CardFilter/cardFilter";
import { api } from "../../api";
import Next from "../NextBtn/next";
import Previous from "../previousBtn/previous";
import { DetailsContext} from '../../context/moveDetails'
export default function Cards() {
  const {highlightIsActive} = useContext(DetailsContext)
  return (
    <Fragment>
     {highlightIsActive&&
      <Fragment>
        <h3 className="cards-title">Séries dignas de maratonas</h3>
       <div className="cards">
       <Next class={".card-img-4"} />
       <Previous class={".card-img-4"} />
       <Card api={api.tvShows} class={"card-img-4"}/>
       </div>
       <h3 className="cards-title">Em breve</h3>
       <div className="cards">
       <Next class={".card-img-5"} />
       <Previous class={".card-img-5"} />
       <Card api={api.movieWatchList} class={"card-img-5"}/>
       </div>
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

      </Fragment>
     }
      {!highlightIsActive&&
     <CardFilter  api={api.mostRatedMovies} api2={api.tvShows} />
      }
    </Fragment>

  );
}
