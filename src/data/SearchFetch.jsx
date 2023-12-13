import { useContext, useEffect } from "react";
import { SearchFetchContext, UserSearchInputContext, FetchButtonContext } from "../context/Context";


const SearchFetch = () => {
    const { searchFetchData, setSearchFetchData } = useContext(SearchFetchContext);
    const { userInput, setUserInput }= useContext(UserSearchInputContext);
    const { fetchButton, setFetchButton } = useContext(FetchButtonContext);
    // console.log('fetch log: ', searchFetchData);

    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userInput}`)
      .then(res => res.json())
      .then(data => {
        setSearchFetchData(data)
        
    })
      .catch(error => console.log("Tell me why: ", error))
    }, [fetchButton])
}
 
export default SearchFetch;