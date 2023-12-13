import React, { createContext, useContext, useEffect, useState } from "react";

const VodkaContext = createContext();

// Rename GinProvider to VodkaProvider
const VodkaProvider = ({ children }) => {
  const [vodkaData, setVodkaData] = useState([]);
  const [selectedCocktail, setSelectedCocktail] = useState(null);

  const searchVodkaCocktails = () => fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=vodka`).then(res => res.json());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await searchVodkaCocktails();
        console.log(data);
        setVodkaData(data.drinks || []);
      } catch (error) {
        console.error('Fehler beim Laden der Daten:', error);
      }
    };
    fetchData();
  }, []); 

  const contextValue = {
    vodkaData,
    selectedCocktail,
    setSelectedCocktail,
  };

  return (
    <VodkaContext.Provider value={contextValue}>
      {children}
    </VodkaContext.Provider>
  );
};

const useVodkaContext = () => {
  const context = useContext(VodkaContext);
  if (!context) {
    throw new Error('useVodkaContext muss innerhalb deines VodkaContext.Provider´s sein');
  }
  return context;
};

export { VodkaProvider, useVodkaContext };
