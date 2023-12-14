import React, { useState } from "react";
import PureModal from "react-pure-modal";
import './GinItem.scss'
import CloseIcon from "../../assets/svg/CloseIcon";

const GinItem = ({ ginItem }) => {
  const [modal, setModal] = useState(false);

  return (
    <>
    <article className="singleGinItemWrap" onClick={() => setModal(true)}>
      <div>
        <img src={ginItem.strDrinkThumb} alt="" />
        <h3>{ginItem.strDrink}</h3>
      </div>
      </article>
      <PureModal
        header={ginItem.strDrink}
        footer={<div></div>}
        isOpen={modal}
        closeButton={<CloseIcon/>}
        closeButtonPosition="bottom"
        onClose={() => {
          setModal(false);
          return true;
        }}
      >
        <img src={ginItem.strDrinkThumb} alt="" />
        <div className="infoGinWrap">
        <h4>Ingredients:</h4>
        {renderIngredient(ginItem.strMeasure1, ginItem.strIngredient1)}
        {renderIngredient(ginItem.strMeasure2, ginItem.strIngredient2)}
        {renderIngredient(ginItem.strMeasure3, ginItem.strIngredient3)}
        {renderIngredient(ginItem.strMeasure4, ginItem.strIngredient4)}

        <h4>Instructions:</h4>
        <p>{ginItem.strInstructions}</p>

        </div>

      </PureModal>
      
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


export default GinItem;
