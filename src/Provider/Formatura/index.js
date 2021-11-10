import { createContext, useContext, useState } from "react";
export const FormaturaContext = createContext();

export const FormaturaProvider = ({children}) =>{
    const [carFormatura, setCarFormatura] = useState([]);

    return(
        <FormaturaContext.Provider value={{setCarFormatura, carFormatura}}>
            {children}
        </FormaturaContext.Provider>
    )
}
export const useFormatura = () => useContext(FormaturaContext);