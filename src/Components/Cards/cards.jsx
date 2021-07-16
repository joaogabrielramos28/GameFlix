import React, { useEffect, useState } from "react";
import "./cards.css";
import Banner from "../../assets/banner.png";
import api from '../../api'
export default function Cards() {
    const [games,setGames] = useState([{}])
    const [count,setCount] = useState(0)
   
    useEffect(()=>{
        api.get("/games").then((response)=>{
            setGames(response.data)
        }).catch((err)=>{
            console.error(err)
        })
    },[])
  return (
      <div className="cards">
          {games.filter(game=>game.id< 8
        
          ).map((game)=>(
              
              <img key={game.id} src={`${game.thumbnail}`} alt={game.title} className="card-img" />
            
          ))}
      </div>
     
  );
}
