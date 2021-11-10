import { createContext, useContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";
export const FormaturaContext = createContext();

export const FormaturaProvider = ({children}) =>{
    const [carFormatura, setCarFormatura] = useState([]);
      
    useEffect(()=>{
    },[carFormatura])

    return(
        <FormaturaContext.Provider value={{setCarFormatura, carFormatura}}>
            {children}
        </FormaturaContext.Provider>
    )
}
export const useFormatura = () => useContext(FormaturaContext);