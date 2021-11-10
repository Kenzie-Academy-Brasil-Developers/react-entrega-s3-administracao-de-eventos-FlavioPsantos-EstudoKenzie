import axios from "axios";
import {createContext, useEffect, useState, useContext } from "react";

export const DrinkContext = createContext();

export const DrinkProvider = ({children}) =>{
    const [drink, setDrink] = useState([])
   
   
    const renderDrink = () =>{
        axios
        .get("https://api.punkapi.com/v2/beers")
        .then((response)=> setDrink(response.data))
        .catch(err => console.log('Erro de requisição'))
        
    }
    useEffect(()=>{
        renderDrink();
    },[]);

    return(
        <DrinkContext.Provider value={{drink, renderDrink}}>
            {children}
        </DrinkContext.Provider>
    )
}
export const useDrink = () => useContext(DrinkContext);