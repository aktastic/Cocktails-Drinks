import React from "react";
import GinItem from "./GinItem";
import { useGinContext } from "../../context/GinContext";
import Header from "../headerComponents/Header";
import Footer from "../footerComponents/Footer";
import './GinList.scss'


const GinList = () => {
    const { ginData, setSelectedCocktail } = useGinContext();

    console.log(ginData);
    return ( 
    <>
    <Header/>
    <section className="ginListWrap">
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
    </section>
    <Footer/>
    </>
    );
}

export default GinList;