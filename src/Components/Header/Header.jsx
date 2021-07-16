import React from 'react'
import {AiFillHeart,AiOutlineSearch,IoMdSettings} from 'react-icons/all'
import Logo from '../../assets/Logotipo.svg'
import './Header.css'

export default function Header() {
    return (
        <div className="navbar">
            <header>
                <div className="header-1">
                    <div className="header-logo">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="header-menu">
                        <a href="/">Início</a>
                        <a href="/">Jogos</a>
                        <a href="/">Categorias</a>
                    </div>
                </div>

                <div className="header-2">

                        <AiOutlineSearch  color={'white'}/>
                        <AiFillHeart color={'white'} />
                        <IoMdSettings color={'white'} />

                </div>
            </header>
        </div>
    )
}
