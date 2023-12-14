import React, { useState } from "react";
import PureModal from "react-pure-modal";
import './Vodka.scss'
import CloseIcon from "../../assets/svg/CloseIcon";

const VodkaItem = ({ vodkaItem }) => {
    const [modal, setModal] = useState(false);

    return (
        <>
    <article className="singleVodkaItemWrap" onClick={() => setModal(true)}>
        <img src={vodkaItem.strDrinkThumb} alt="" />
        <h3>{vodkaItem.strDrink}</h3>
    </article>
    <PureModal
        className="PureModal"
        header={vodkaItem.strDrink}
        footer={<div></div>}
        isOpen={modal}
        closeButton={<CloseIcon/>}
        closeButtonPosition="bottom"
        onClose={() => {
        setModal(false);
        return true;
        }}
    >
        <img src={vodkaItem.strDrinkThumb} />
        <div className="infoVodkaWrap">
        <h4>Ingredients:</h4>
        {renderIngredient(vodkaItem.strMeasure1, vodkaItem.strIngredient1)}
        {renderIngredient(vodkaItem.strMeasure2, vodkaItem.strIngredient2)}
        {renderIngredient(vodkaItem.strMeasure3, vodkaItem.strIngredient3)}
        {renderIngredient(vodkaItem.strMeasure4, vodkaItem.strIngredient4)}

        <h4>Instructions:</h4>
        <p>{vodkaItem.strInstructions}</p>
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

export default VodkaItem;
