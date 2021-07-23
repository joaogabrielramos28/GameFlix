
import React, { useState } from 'react'
export const DetailsContext = React.createContext({})

export const DetailsProvider = (props) => {
    const [contextDetails,setContextDetails] = useState({})
    const [move, setMove] = useState(0);
    const [ highlightIsActive,setHighlightIsActive] = useState(true)
    const [searchMovie,SetSearchMovie] = useState('')
    return(
        <DetailsContext.Provider value={{setContextDetails,contextDetails,move,setMove,highlightIsActive,setHighlightIsActive,searchMovie,SetSearchMovie}}>
            {props.children}
        </DetailsContext.Provider>
    )
}