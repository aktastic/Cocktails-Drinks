import React, { useState } from "react";
import PureModal from 'react-pure-modal';

const VodkaItem = ({ vodkaItem,setSelectedCocktail }) => {
    const [modal, setModal] = useState(false);

console.log(vodkaItem);
return (
    <article>
    <div >
        <h1>{vodkaItem.strDrink}</h1>
    </div>
<PureModal
    header="Your header"
    footer={
    <div>
    </div>
    }
    isOpen={modal}
    closeButton="close"
    closeButtonPosition="bottom"
    onClose={() => {setModal(false);
    return true;}}
>
<h2>{vodkaItem.strDrink}</h2>
        {vodkaItem.strIngredient1 && (
        <p>{`${vodkaItem.strMeasure1} ${vodkaItem.strIngredient1}`}</p>
        )}
        {vodkaItem.strIngredient2 && (
        <p>{`${vodkaItem.strMeasure2} ${vodkaItem.strIngredient2}`}</p>
        )}
        {vodkaItem.strIngredient3 && (
        <p>{`${vodkaItem.strMeasure3} ${vodkaItem.strIngredient3}`}</p>
        )}
        {vodkaItem.strIngredient4 && (
        <p>{`${vodkaItem.strMeasure4} ${vodkaItem.strIngredient4}`}</p>
        )}
        {vodkaItem.strIngredient5 && (
        <p>{`${vodkaItem.strMeasure5} ${vodkaItem.strIngredient5}`}</p>
        )}
</PureModal>;
<button className="button" onClick={() => setModal(true)}>Open simple modal</button>
    </article>
);
};

    export default VodkaItem;