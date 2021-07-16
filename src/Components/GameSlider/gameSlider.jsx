import React from 'react'
import "./gameSlider.css"
import Cards from "../Cards/cards"
function GameSlider() {
    return (
        <div className="game-slider">
            
            <h3>Ultimos jogos lançados</h3>
            
            <Cards />
        </div>
    )
}

export default GameSlider
