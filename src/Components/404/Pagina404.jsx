import React from 'react'
import './Pagina404.css'
import Header from '../Header/Header'
import {Link} from "react-router-dom"
function Pagina404() {
    return (
        <div className="principal">
        <Header />
        <div className="center">
            <div className="content-404">

            <h1>Você se perdeu?</h1>
            <p>Infelizmente não localizamos essa página. Você encontra muitos outros títulos na página inicial</p>
           <Link to="/"> <button className="return">Página Inicial da Netflix</button></Link>

            <button className="btn-code" >Código de erro <strong>NSES-404</strong></button>
            </div>
        </div>
        </div>
    )
}

export default Pagina404
