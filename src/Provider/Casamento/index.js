import { createContext, useContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";
export const CasamentoContext = createContext();

export const CasamentoProvider = ({children}) =>{
    const [carCasamento, setCarCasamento] = useState([]);

    
    useEffect(()=>{
        
       
    },[carCasamento])

    return(
        <CasamentoContext.Provider value={{setCarCasamento, carCasamento}}>
            {children}
        </CasamentoContext.Provider>
    )
}
export const useCasamento = () => useContext(CasamentoContext);