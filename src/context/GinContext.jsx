import React, { createContext, useContext, useEffect, useState } from "react";

const GinContext = createContext();


const GinProvider = ({ children }) => {
const [ginData, setGinData] = useState([]);
const [selectedCocktail, setSelectedCocktail] = useState(null);

const searchGinCocktails = () => fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=gin`).then(res => res.json());


useEffect(() => {

    const fetchData = async () => {
    try {
        const data = await searchGinCocktails();
        console.log(data);
        setGinData(data.drinks || []); 
    } catch (error) {

        console.error('Fehler beim Laden der Daten:', error);
    }
    };
    fetchData();
}, []); 

    const contextValue = {
    ginData,
    selectedCocktail,
    setSelectedCocktail,
};

    return (
    <GinContext.Provider value={contextValue}>
    {children}
    </GinContext.Provider>
);
};


    const useGinContext = () => {
    const context = useContext(GinContext);
    if (!context) {
    throw new Error('useGinContext muss innerhalb deines GinContext.Provider´s sein');
}
    return context;
};


    export { GinProvider, useGinContext };
