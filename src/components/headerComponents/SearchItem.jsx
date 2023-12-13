
import './SearchItem.scss'


const SearchItem = (props) => {

    return (  
        <article key={props.key} className="singleSearchItem_wrap">
            <img src={props.img} alt={props.alt} />
            <h3>{props.drinkName}</h3>
        </article>
                
    )
}
 
export default SearchItem;