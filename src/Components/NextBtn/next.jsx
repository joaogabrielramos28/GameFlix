import React from 'react'
import { DetailsContext } from '../../context/moveDetails';
import "./next.css"
import {MdKeyboardArrowRight} from 'react-icons/md'
function Next(props) {
    const {setMove,move} = React.useContext(DetailsContext)
    const moveRight = () => {
        if (move == 0) {
          setMove(move - 60);
        }
        setMove(move - 60);
        let imgs = document.querySelectorAll(props.class).forEach((img) => {
          img.style.transform = `translateX(${move}%)`;
        });
    }
    return (
        <div>
            <button className="next-btn" onClick={moveRight}>
              <MdKeyboardArrowRight size={"4em"} color={"white"}  />
            </button>
        </div>
    )
}

export default Next
