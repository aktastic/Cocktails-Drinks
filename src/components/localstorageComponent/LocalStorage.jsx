import React from "react";
import { useState, useEffect } from "react";
import Header from "../headerComponents/Header";
import Footer from "../footerComponents/Footer";
import CloseIcon from "../../assets/svg/CloseIcon";
import "./LocalStorage.scss";

const LocalStorage = () => {
  const storedCocktail = JSON.parse(localStorage.getItem("newCocktail"));
  const [cocktailConstructor, setCocktailConstructor] = useState({});
  const [newCocktail, setNewCocktail] = useState(storedCocktail);

  useEffect(() => {
    localStorage.setItem("newCocktail", JSON.stringify(newCocktail));
  }, [newCocktail]);

  const storeInputData = () => {
    event.preventDefault();
    setNewCocktail((cocktailInput) => [...cocktailInput, cocktailConstructor]);
    setCocktailConstructor({});
    document
      .querySelectorAll(".newCocktail__wrapper input")
      .forEach((input) => (input.value = ""));
  };

  const deleteStorageItem = (itemToDelete) => {
    const updatedLocalStorage = storedCocktail.filter((cocktail) => {
      cocktail !== itemToDelete;
    });
    localStorage.setItem("newCocktail", JSON.stringify(updatedLocalStorage));
    setNewCocktail(updatedLocalStorage);
  };
  return (
    <>
      <Header />
      <section className="section__wrapper">
        <form action="#" className="newCocktail__wrapper">
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => {
              setCocktailConstructor((prev) => ({
                ...prev,
                name: e.target.value,
              }));
            }}
          />
          <input
            type="text"
            placeholder="Category"
            onChange={(e) =>
              setCocktailConstructor((prev) => ({
                ...prev,
                category: e.target.value,
              }))
            }
          />
          <input
            type="text"
            placeholder="Image URL"
            onChange={(e) =>
              setCocktailConstructor((prev) => ({
                ...prev,
                imageURL: e.target.value,
              }))
            }
          />
          <input
            type="text"
            placeholder="Description"
            onChange={(e) =>
              setCocktailConstructor((prev) => ({
                ...prev,
                description: e.target.value,
              }))
            }
          />
          <input
            type="text"
            placeholder="Ingredient 1"
            onChange={(e) =>
              setCocktailConstructor((prev) => ({
                ...prev,
                ingredientOne: e.target.value,
              }))
            }
          />
          <input
            type="text"
            placeholder="Amount Ingredient 1"
            onChange={(e) =>
              setCocktailConstructor((prev) => ({
                ...prev,
                amountIngredientOne: e.target.value,
              }))
            }
          />
          <input
            type="text"
            placeholder="Ingredient 2"
            onChange={(e) =>
              setCocktailConstructor((prev) => ({
                ...prev,
                ingredientTwo: e.target.value,
              }))
            }
          />
          <input
            type="text"
            placeholder="Amount Ingredient 2"
            onChange={(e) =>
              setCocktailConstructor((prev) => ({
                ...prev,
                amountIngredientTwo: e.target.value,
              }))
            }
          />
          <input
            type="text"
            placeholder="Ingredient 3"
            onChange={(e) =>
              setCocktailConstructor((prev) => ({
                ...prev,
                ingredientThree: e.target.value,
              }))
            }
          />
          <input
            type="text"
            placeholder="Amount Ingredient 3"
            onChange={(e) =>
              setCocktailConstructor((prev) => ({
                ...prev,
                amountIngredientThree: e.target.value,
              }))
            }
          />
          <button onClick={() => storeInputData()}>ADD Cocktail</button>
        </form>
      </section>
      {newCocktail?.map((cocktail, index) => (
        <div className="newcocktail_Container" key={index}>
          <article>
            <h2>{"Cocktail: " + cocktail.name}</h2>
            <p>{"Category: " + cocktail.category}</p>
            <p>
              <img src={cocktail.imageURL} alt="" />{" "}
            </p>
            <p>{"Description: " + cocktail.description}</p>
            <p>{"Ingrdient 1: " + cocktail.ingredientOne}</p>
            <p>{"Amount of Ingrdient 1: " + cocktail.amountIngredientOne}</p>
            <p>{"Ingrdient 2: " + cocktail.ingredientTwo}</p>
            <p>{"Amount of Ingrdient 2: " + cocktail.amountIngredientTwo}</p>
            <p>{"Ingrdient 3: " + cocktail.ingredientThree}</p>
            <p>{"Amount of Ingrdient 3: " + cocktail.amountIngredientThree}</p>
            <button
              onClick={(cocktail) => {
                deleteStorageItem(cocktail);
              }}
            >
              <CloseIcon />
            </button>
          </article>
        </div>
      ))}

      <Footer />
    </>
  );
};

export default LocalStorage;
