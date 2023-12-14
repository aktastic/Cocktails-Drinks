import { useEffect, useState } from "react";
import Header from "../headerComponents/Header";
import Footer from "../footerComponents/Footer";
import CloseIcon from "../../assets/svg/CloseIcon";
import PureModal from "react-pure-modal";
import './Random.scss'

const RandomDrink = () => {
  const [modal, setModal] = useState(false);
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
      <section className="randomListWrap">
        {randomDrinList?.map((randomDrink) => {
          return (
            <>
            <article
              key={randomDrink.idDrink}
              className="singleRandomItemWrap"
              onClick={() => setModal(true)}
              >
              <div>
                <img
                src={randomDrink.strDrinkThumb}
                alt="Scotch Cocktail Image"/>
                <h3>{randomDrink.strDrink}</h3>
              </div>
            </article>
                  <PureModal
        header={randomDrink.strDrink}
        footer={<div></div>}
        isOpen={modal}
        closeButton={<CloseIcon/>}
        closeButtonPosition="bottom"
        onClose={() => {
          setModal(false);
          return true;
        }}
      >
        <img src={randomDrink.strDrinkThumb} alt="" />
        <div className="infoRandomWrap">
        <h4>Ingredients:</h4>
        {renderIngredient(randomDrink.strMeasure1, randomDrink.strIngredient1)}
        {renderIngredient(randomDrink.strMeasure2, randomDrink.strIngredient2)}
        {renderIngredient(randomDrink.strMeasure3, randomDrink.strIngredient3)}
        {renderIngredient(randomDrink.strMeasure4, randomDrink.strIngredient4)}

        <h4>Instructions:</h4>
        <p>{randomDrink.strInstructions}</p>

        </div>

      </PureModal>
            </>
            
          );
        })}
      </section>
      <Footer />
    </>
  );
};
const renderIngredient = (measure, ingredient) => {
  if (ingredient) {
    if (measure) {
      return <p>{`${measure} ${ingredient}`}</p>;
    }
    return <p>{ingredient}</p>;
  }
  return null;
};

export default RandomDrink;
