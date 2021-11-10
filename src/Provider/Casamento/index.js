import { createContext, useContext, useState } from "react";
export const CasamentoContext = createContext();

export const CasamentoProvider = ({children}) =>{
    const [carCasamento, setCarCasamento] = useState([]);

    
    
    return(
        <CasamentoContext.Provider value={{setCarCasamento, carCasamento}}>
            {children}
        </CasamentoContext.Provider>
    )
}
export const useCasamento = () => useContext(CasamentoContext);