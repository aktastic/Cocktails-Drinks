import React, { useState } from "react";
import PureModal from "react-pure-modal";

const GinItem = ({ ginItem }) => {
  const [modal, setModal] = useState(false);

  return (
    <article>
      <div>
        <h3>{ginItem.strDrink}</h3>
      </div>
      <PureModal
        header="Your header"
        footer={<div></div>}
        isOpen={modal}
        closeButton="close"
        closeButtonPosition="bottom"
        onClose={() => {
          setModal(false);
          return true;
        }}
      >
        <h2>{ginItem.strDrink}</h2>
        {ginItem.strIngredient1 && (
          <p>{`${ginItem.strMeasure1} ${ginItem.strIngredient1}`}</p>
        )}
        {ginItem.strIngredient2 && (
          <p>{`${ginItem.strMeasure2} ${ginItem.strIngredient2}`}</p>
        )}
        {ginItem.strIngredient3 && (
          <p>{`${ginItem.strMeasure3} ${ginItem.strIngredient3}`}</p>
        )}
        {ginItem.strIngredient4 && (
          <p>{`${ginItem.strMeasure4} ${ginItem.strIngredient4}`}</p>
        )}
        {ginItem.strIngredient5 && (
          <p>{`${ginItem.strMeasure5} ${ginItem.strIngredient5}`}</p>
        )}
      </PureModal>

      <button className="button" onClick={() => setModal(true)}>
        Open simple modal
      </button>
    </article>
  );
};

export default GinItem;
