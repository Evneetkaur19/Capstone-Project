import { createContext } from "react";
import { service } from "../assets/assets_frontend/assets";
export const AppContext = createContext()

const AppContextProvider = (props)=> {



    const value = {
        service
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>

    )
    
}

export default AppContextProvider