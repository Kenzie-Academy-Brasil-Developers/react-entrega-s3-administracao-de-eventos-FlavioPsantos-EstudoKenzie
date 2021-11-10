import { createContext, useContext, useState } from "react";
export const ConfraContext = createContext();

export const ConfraProvider = ({children}) =>{
    const [carConfra, setCarConfra] = useState([]);
    

    return(
        <ConfraContext.Provider value={{setCarConfra, carConfra}}>
            {children}
        </ConfraContext.Provider>
    )
}
export const useConfra = () => useContext(ConfraContext);