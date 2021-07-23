import React, { useContext, useState } from 'react'
import {DetailsContext} from '../../context/moveDetails'
import {AiFillHeart,AiOutlineSearch,IoMdSettings} from 'react-icons/all'
import './Header.css'
import {Link} from 'react-router-dom'

export default function Header() {
    const [searchIsActive,SetSearchIsActive] = useState(false)
    const [countClick, setCountClick] = useState(0)
    const {setHighlightIsActive,searchMovie,SetSearchMovie} = useContext(DetailsContext)
    const activeSearch = (e) =>{
        if(e.target.value.length == 0){
            setHighlightIsActive(true)

        }else{
            setHighlightIsActive(false)
            SetSearchMovie(e.target.value)
        }
    }
    
    console.log(searchMovie)
    const activeInputSearch = () =>{
        setCountClick(countClick + 1)
        if(countClick % 1 == 0){
            SetSearchIsActive(true)
        }
    
        if(countClick % 2 == 0){
            SetSearchIsActive(false)
        }
    }
    return (
        <div className="navbar">
            <header>
                <div className="header-1">
                    <div className="header-logo">
                        <Link to="/"><img src="https://fontmeme.com/permalink/210721/2fefd85d65936456ca7740f4e60cbcf0.png" alt="" /></Link>
                    </div>
                    <div className="header-menu">
                        <Link to="/">Início</Link>
                        <Link to="/">Filmes</Link>
                        <Link to="/">Categorias</Link>
                    </div>
                </div>

                <div className="header-2">
                        {
                            searchIsActive&&
                            <input className="search-input" type="text"  onChange={activeSearch} placeholder="Títulos de filmes e séries" />
                        }
                        <Link onClick={activeInputSearch}><AiOutlineSearch size={'1.5em'} color={'white'}/></Link>
                       
                        
                        {/* <AiFillHeart color={'white'} />
                        <IoMdSettings color={'white'} /> */}

                </div>
            </header>
        </div>
    )
}
