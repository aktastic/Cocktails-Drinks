import React from "react";
import GinItem from "./GinItem";
import { useGinContext } from "../../context/GinContext";
import Header from "../headerComponents/Header";
import Footer from "../footerComponents/Footer";


const GinList = () => {
    const { ginData, setSelectedCocktail } = useGinContext();

    return ( 
<section>
    <Header/>
    {ginData.length > 0 ? (
        ginData.map((ginItem) => (
            <GinItem
            key={ginItem.idDrink}
            ginItem={ginItem}
            setSelectedCocktail={setSelectedCocktail}
            />   
        ))
    ) : (
        <p>Lade Gin-Daten...</p>
    )}
    <Footer/>
    </section>
    );
}

export default GinList;