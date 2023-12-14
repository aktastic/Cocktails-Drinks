import "./SearchItem.scss";
import React, { useState } from "react";
import PureModal from "react-pure-modal";
import CloseIcon from "../../assets/svg/CloseIcon";

const SearchItem = (props) => {
  const [modal, setModal] = useState(false);

  console.log(props.singleDrinkObj);

  const renderIngredient = (measure, ingredient) => {
    if (ingredient) {
      if (measure) {
        return <p>{`${measure} ${ingredient}`}</p>;
      }
      return <p>{ingredient}</p>;
    }
    return null;
  };
  

  return (
    <>
    <article
      key={props.singleDrinkObj.idDrink}
      className="singleSearchItem_wrap"
      onClick={() => setModal(true)}
    >
      <img src={props.img} alt={props.alt} />
      <h3>{props.drinkName}</h3>
    </article>
    <PureModal
        header={props.drinkName}
        footer={<div></div>}
        isOpen={modal}
        closeButton={<CloseIcon/>}
        closeButtonPosition="bottom"
        onClose={() => {
          setModal(false);
          return true;
        }}
      >
        <img src={props.img} alt={props.alt} />
        <div className="info_wrap">
            <h4>Ingedients:</h4>
            {renderIngredient(props.singleDrinkObj.strMeasure1, props.singleDrinkObj.strIngredient1)}
            {renderIngredient(props.singleDrinkObj.strMeasure2, props.singleDrinkObj.strIngredient2)}
            {renderIngredient(props.singleDrinkObj.strMeasure3, props.singleDrinkObj.strIngredient3)}
            {renderIngredient(props.singleDrinkObj.strMeasure4, props.singleDrinkObj.strIngredient4)}
            {renderIngredient(props.singleDrinkObj.strMeasure5, props.singleDrinkObj.strIngredient5)}
        
            <h4>Instructions:</h4>
            <p>{props.singleDrinkObj.strInstructions}</p>
        </div>
        
      </PureModal>
    </>
  );
};
export default SearchItem;
