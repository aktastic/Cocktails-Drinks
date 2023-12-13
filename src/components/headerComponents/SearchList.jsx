import Footer from "../footerComponents/Footer";
import Header from "./Header";
import SearchItem from "./SearchItem";
import { useContext } from "react";
import { SearchFetchContext } from "../../context/Context";
import './SearchList.scss'

const SearchList = () => {
    const { searchFetchData, setSearchFetchData } = useContext(SearchFetchContext);

    return (  
        <>
            <Header />
            <section className="searchList_wrap">
                {searchFetchData ? (
                    searchFetchData.drinks.map((singleDrinkObj) => {
                        return (
                            <SearchItem 
                                key={singleDrinkObj.idDrink}
                                img={singleDrinkObj.strDrinkThumb}
                                alt={singleDrinkObj.strDrink}
                                drinkName={singleDrinkObj.strDrink}
                                singleDrinkObj={singleDrinkObj}
                            />
                        )
                    })
                ) : (
                    <h3>...drinks loading</h3>
                )}
                
            </section>
            
            <Footer />
        </>
    );
}
 
export default SearchList;