import { createContext, useContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";
export const ConfraContext = createContext();

export const ConfraProvider = ({children}) =>{
    const [carConfra, setCarConfra] = useState([]);
    
    useEffect(()=>{
    },[carConfra])

    return(
        <ConfraContext.Provider value={{setCarConfra, carConfra}}>
            {children}
        </ConfraContext.Provider>
    )
}
export const useConfra = () => useContext(ConfraContext);