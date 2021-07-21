import React from 'react'
import "./previous.css"
import {MdKeyboardArrowLeft} from 'react-icons/md'
import { DetailsContext } from '../../context/moveDetails';
function Previous(props) {

    const {setMove,move} = React.useContext(DetailsContext)
    const moveLeft = () => {
        if (move > 0) {
            return 0

        }
            setMove(move + 60);
            let imgs = document.querySelectorAll(props.class).forEach((img) => {
              img.style.transform = `translateX(${move}%)`;
            });
        
       
    }
    return (
        <div>
            <button className="previous-btn" onClick={moveLeft}>
                <MdKeyboardArrowLeft size={"4em"} color={"white"} />
            </button>
        </div>
    )
}

export default Previous