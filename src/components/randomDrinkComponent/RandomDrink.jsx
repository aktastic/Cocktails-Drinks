import { useEffect, useState } from "react";
import Header from "../headerComponents/Header";
import Footer from "../footerComponents/Footer";
const RandomDrink = () => {
  const [randomDrinList, setRandomList] = useState([]);
  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRandomList(data.drinks);
      });
  }, []);
  return (
    <>
      <Header />
      <section className="randomDrink__wrapper">
        {randomDrinList?.map((randomDrink) => {
          return (
            <article
              key={randomDrink.idDrink}
              className="randomDrink_container_design"
            >
              <h2>{randomDrink.strDrink}</h2>
              <img
                src={randomDrink.strDrinkThumb}
                alt="Scotch Cocktail Image"
              />
            </article>
          );
        })}
      </section>
      <Footer />
    </>
  );
};

export default RandomDrink;
