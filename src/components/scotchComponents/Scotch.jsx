import { useEffect, useState } from "react";
import "./Scotch.scss";

import Header from "../headerComponents/Header";
import Footer from "../footerComponents/Footer";
import PureModal from "react-pure-modal";

const Scotch = () => {
  const [scotchList, setScotchList] = useState([]);
  const [scotchDetailsList, setScotchDetailsList] = useState({});
  const [storedScotchId, setStoredScotchID] = useState(null);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Scotch")
      .then((res) => res.json())
      .then((scotchData) => {
        console.log(scotchData);
        setScotchList(scotchData.drinks);
      });
  }, []);

  useEffect(() => {
    if (storedScotchId) {
      fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${storedScotchId}`
      )
        .then((res) => res.json())
        .then((scotchDetails) => {
          console.log(scotchDetails);
          setScotchDetailsList(scotchDetails.drinks[0]);
        });
    }
  }, [storedScotchId]);

  return (
    <>
      <Header />
      <section className="scotch__wrapper" onClick={() => setModal(true)}>
        {scotchList?.map((scotchDrink) => (
          <article
            key={scotchDrink.idDrink}
            className="scotch_container_design"
            onClick={() => setStoredScotchID(scotchDrink.idDrink)}
          >
            <h2>{scotchDrink.strDrink}</h2>
            <img src={scotchDrink.strDrinkThumb} alt="Scotch Cocktail Image" />
          </article>
        ))}
        <PureModal
          header={scotchDetailsList.strDrink}
          footer={<div></div>}
          isOpen={modal}
          closeButton="close"
          closeButtonPosition="bottom"
          onClose={() => {
            setModal(false);
            return true;
          }}
        >
          <img src={scotchDetailsList.strDrinkThumb} />
          {scotchDetailsList.strIngredient1 && (
            <p>{`${scotchDetailsList.strMeasure1} ${scotchDetailsList.strIngredient1}`}</p>
          )}
          {scotchDetailsList.strIngredient2 && (
            <p>{`${scotchDetailsList.strMeasure2} ${scotchDetailsList.strIngredient2}`}</p>
          )}
          {scotchDetailsList.strIngredient3 && (
            <p>{`${scotchDetailsList.strMeasure3} ${scotchDetailsList.strIngredient3}`}</p>
          )}
          {scotchDetailsList.strIngredient4 && (
            <p>{`${scotchDetailsList.strMeasure4} ${scotchDetailsList.strIngredient4}`}</p>
          )}
          {scotchDetailsList.strIngredient5 && (
            <p>{`${scotchDetailsList.strMeasure5} ${scotchDetailsList.strIngredient5}`}</p>
          )}
        </PureModal>
      </section>

      <Footer />
    </>
  );
};

export default Scotch;
