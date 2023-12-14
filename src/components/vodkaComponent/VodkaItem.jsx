import React, { useState } from "react";
import PureModal from "react-pure-modal";
import './Vodka.scss'

const VodkaItem = ({ vodkaItem }) => {
    const [modal, setModal] = useState(false);

    return (
    <article className="cardContainer" onClick={() => setModal(true)}>
        <div className="itemCard">
        <h3>{vodkaItem.strDrink}</h3>
        <img src={vodkaItem.strDrinkThumb} alt="" />
        </div>
    <PureModal
        className="PureModal"
        header={vodkaItem.strDrink}
        footer={<div></div>}
        isOpen={modal}
        closeButton={<p>close</p>}
        closeButtonPosition="bottom"
        onClose={() => {
        setModal(false);
        return true;
        }}
    >
        {renderIngredient(vodkaItem.strMeasure1, vodkaItem.strIngredient1)}
        {renderIngredient(vodkaItem.strMeasure2, vodkaItem.strIngredient2)}
        {renderIngredient(vodkaItem.strMeasure3, vodkaItem.strIngredient3)}
        {renderIngredient(vodkaItem.strMeasure4, vodkaItem.strIngredient4)}
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

export default VodkaItem;
