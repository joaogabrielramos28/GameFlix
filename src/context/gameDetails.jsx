
import React, { useState } from 'react'


export const DetailsContext = React.createContext({})

export const DetailsProvider = (props) => {
    const [contextDetails,setContextDetails] = useState({})


    return(
        <DetailsContext.Provider value={{setContextDetails,contextDetails}}>
            {props.children}
        </DetailsContext.Provider>
    )
}