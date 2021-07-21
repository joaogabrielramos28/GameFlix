
import React, { useState } from 'react'
export const DetailsContext = React.createContext({})

export const DetailsProvider = (props) => {
    const [contextDetails,setContextDetails] = useState({})
    const [move, setMove] = useState(0);
    return(
        <DetailsContext.Provider value={{setContextDetails,contextDetails,move,setMove}}>
            {props.children}
        </DetailsContext.Provider>
    )
}