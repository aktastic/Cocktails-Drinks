import { useEffect, useState } from "react";
import "./Scotch.scss";

import Header from "../headerComponents/Header";
import Footer from "../footerComponents/Footer";

const Scotch = () => {
  const [scotchList, setScotchList] = useState([]);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Scotch")
      .then((res) => res.json())
      .then((scotchData) => {
        console.log(scotchData);
        setScotchList(scotchData.drinks);
      });
  }, []);

  return (
    <>
      <Header />
      <section className="scotch__wrapper">
        {scotchList?.map((scotchDrink) => {
          return (
            <article
              key={scotchDrink.idDrink}
              className="scotch_container_design"
            >
              <h2>{scotchDrink.strDrink}</h2>
              <img
                src={scotchDrink.strDrinkThumb}
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

export default Scotch;
