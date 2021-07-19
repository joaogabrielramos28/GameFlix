import React, { useEffect, useState } from "react";
import "./cards.css";
import Banner from "../../assets/banner.png";
import api from '../../api'
import { DetailsContext } from "../../context/gameDetails";
export default function Cards() {
    const [games,setGames] = useState([{}])
    const {setContextDetails} = React.useContext(DetailsContext)
    useEffect(()=>{
        api.get("/games").then((response)=>{
            setGames(response.data)
            setContextDetails(response.data[0])
        }).catch((err)=>{
            console.error(err)
        })
    },[])
  return (
      <div className="cards">
          {games.filter(game=>game.id< 8
          ).map((game)=>(
              
              <>
              <img onClick={()=>setContextDetails(game)} key={game.id} src={`${game.thumbnail}`} alt={game.title} className="card-img" />
             </>
          ))}
      </div>
     
  );
}
