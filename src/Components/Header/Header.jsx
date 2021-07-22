import React from 'react'
import {AiFillHeart,AiOutlineSearch,IoMdSettings} from 'react-icons/all'
import './Header.css'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <div className="navbar">
            <header>
                <div className="header-1">
                    <div className="header-logo">
                        <img src="https://fontmeme.com/permalink/210721/2fefd85d65936456ca7740f4e60cbcf0.png" alt="" />
                    </div>
                    <div className="header-menu">
                        <Link to="/">Início</Link>
                        <Link to="/">Filmes</Link>
                        <Link to="/">Categorias</Link>
                    </div>
                </div>

                <div className="header-2">

                        <Link to="/search"><AiOutlineSearch  color={'white'}/></Link>
                        <AiFillHeart color={'white'} />
                        <IoMdSettings color={'white'} />

                </div>
            </header>
        </div>
    )
}
