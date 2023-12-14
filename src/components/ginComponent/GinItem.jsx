import React, { useState } from "react";
import PureModal from "react-pure-modal";

const GinItem = ({ ginItem }) => {
  const [modal, setModal] = useState(false);

  return (
    <article onClick={() => setModal(true)}>
      <div>
        <h3>{ginItem.strDrink}</h3>
      </div>

      <PureModal
        header={ginItem.strDrink}
        footer={<div></div>}
        isOpen={modal}
        closeButton="close"
        closeButtonPosition="bottom"
        onClose={() => {
          setModal(false);
          return true;
        }}
      >
        {renderIngredient(ginItem.strMeasure1, ginItem.strIngredient1)}
        {renderIngredient(ginItem.strMeasure2, ginItem.strIngredient2)}
        {renderIngredient(ginItem.strMeasure3, ginItem.strIngredient3)}
        {renderIngredient(ginItem.strMeasure4, ginItem.strIngredient4)}
      </PureModal>
      
    </article>
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
