import { useVodkaContext } from "../../context/VodkaContxt";
import Footer from "../footerComponents/Footer";
import GinItem from "../ginComponent/GinItem";
import Header from "../headerComponents/Header";
import VodkaItem from "./VodkaItem";

const VodkaList = () => {

    const {vodkaData, setSelectedCpocktail} = useVodkaContext()


    return ( 
        <section>
            <Header/>
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
            <Footer/>
        </section>
    );
}

export default VodkaList;