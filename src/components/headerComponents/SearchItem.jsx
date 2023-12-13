import "./SearchItem.scss";

const SearchItem = (props) => {
  console.log(props.singleDrinkObj.idDrink);

  return (
    <article
      key={props.singleDrinkObj.idDrink}
      className="singleSearchItem_wrap"
    >
      <img src={props.img} alt={props.alt} />
      <h3>{props.drinkName}</h3>
    </article>
  );
};

export default SearchItem;
