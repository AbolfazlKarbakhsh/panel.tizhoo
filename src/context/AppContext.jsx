import React, { useState } from "react";
import { createContext, useContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";

const AppContext = createContext()

const IntialStateApp = {
    gigaMenu:false,
}

 const AppContextProvider = ({children}) => {
    const [editState , setEditState] = useState('')
    const [appState , dispatch] = useReducer(AppReducer , IntialStateApp)

    const DrawerGigaMenu = () => {
        dispatch({type:'GigaMenuDrawer'})
    }

    return (
        <AppContext.Provider value={{gigaMenu : appState.gigaMenu , DrawerGigaMenu , editState , setEditState}}>
            {children}
        </AppContext.Provider>
    )
}
export const useAppContext = () => {
    return useContext(AppContext)
}

export default AppContextProvider

