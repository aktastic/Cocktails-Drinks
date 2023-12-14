import { useVodkaContext } from "../../context/VodkaContxt";
import Footer from "../footerComponents/Footer";
import Header from "../headerComponents/Header";
import VodkaItem from "./VodkaItem";
import './Vodka.scss'

const VodkaList = () => {

    const {vodkaData, setSelectedCpocktail} = useVodkaContext()

    console.log(vodkaData);
    return ( 
        <section >
            <Header/>
            <section className="galleryWrapper">
            {vodkaData.length > 0 ? (
                vodkaData.map((vodkaItem)=> (
                    <VodkaItem 
                    key={vodkaItem.idDrink}
                    vodkaItem={vodkaItem}
                    setSelectedCpocktail={setSelectedCpocktail}

                    />
                ))
            ):(
                <p>Lade Vodka Daten....</p>
            )}
            </section>
            <Footer/>
        </section>
    );
}

export default VodkaList;