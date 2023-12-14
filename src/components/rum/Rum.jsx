import React, { useState, useEffect, useRef } from 'react';
import Modal from 'react-responsive-modal';
import './Rum.scss'; // Import des SCSS-Stils
import Header from '../headerComponents/Header';
import Footer from '../footerComponents/Footer';

const Rum = () => {
  const [cocktails, setCocktails] = useState([]);
  const [selectedCocktail, setSelectedCocktail] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);


  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Rum')
      .then(response => response.json())
      .then(data => setCocktails(data.drinks || []))
      .catch(error => console.error('Error fetching cocktails:', error));
  }, []);

  const fetchCocktailDetails = id => {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(response => response.json())
      .then(data => data.drinks && data.drinks[0])
      .catch(error => {
        console.error('Error fetching cocktail details:', error);
        return null;
      });
  };

  const handleCocktailClick = cocktail => {
    fetchCocktailDetails(cocktail.idDrink).then(cocktailDetails => {
      setSelectedCocktail({
        name: cocktailDetails.strDrink,
        image: cocktailDetails.strDrinkThumb,
        instructions: cocktailDetails.strInstructions,
        ingredients: extractIngredients(cocktailDetails),
      });
      setModalOpen(true);
    });
  };

  const handleCloseModal = () => {
    setSelectedCocktail(null);
    setModalOpen(false);
  };

  const extractIngredients = cocktailDetails => {
    const ingredients = [];
    for (let i = 1; i <= 15; i++) {
      const ingredient = cocktailDetails[`strIngredient${i}`];
      const measure = cocktailDetails[`strMeasure${i}`];
      if (ingredient && ingredient.trim() !== '') {
        ingredients.push(`${measure} ${ingredient}`);
      }
    }
    return ingredients;
  };


  return (
    <>
    <Header/>
    <div className="rum-container">

      <div className="cocktail-grid">
        {cocktails.map(cocktail => (
          <div key={cocktail.idDrink} className="cocktail-item" onClick={() => handleCocktailClick(cocktail)}>
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
            <p className='rumName'>{cocktail.strDrink}</p>
          </div>
        ))}
      </div>
      <Modal open={modalOpen} onClose={handleCloseModal} showCloseIcon={false} >
        {selectedCocktail && (
          <div className="selected-cocktail">
            <h2>{selectedCocktail.name}</h2>
            <img src={selectedCocktail.image} alt={selectedCocktail.name} />
            <h3>Ingredients:</h3>
            <ul>
              {selectedCocktail.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <p>{selectedCocktail.instructions}</p>
            <button className="modal-close" onClick={handleCloseModal}>
              X
            </button>
          </div>
        )}
      </Modal>
    </div>
    <Footer/>
    </>
  );
};

export default Rum;
