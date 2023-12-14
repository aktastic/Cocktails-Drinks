import React from "react";
import { useState, useEffect } from "react";
import Header from "../headerComponents/Header";
import Footer from "../footerComponents/Footer";
import "./LocalStorage.scss";

const LocalStorage = () => {
  const storedCocktail = JSON.parse(localStorage.getItem("newCocktail"));
  const [cocktailConstructor, setCocktailConstructor] = useState({});
  const [newCocktail, setNewCocktail] = useState(storedCocktail);

  useEffect(() => {
    localStorage.setItem("newCocktail", JSON.stringify(newCocktail));
  }, [newCocktail]);

  const storeInputData = () => {
    setNewCocktail((cocktailInput) => [...cocktailInput, cocktailConstructor]);
    setCocktailConstructor({});
    document
      .querySelectorAll(".newCocktail__wrapper input")
      .forEach((input) => (input.value = ""));
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
          <button onClick={() => storeInputData()}>SUBMIT</button>
        </form>
        {newCocktail?.map((cocktail, index) => (
          <article key={index}>
            <h2>{cocktail.name}</h2>
            <h3>{cocktail.category}</h3>
            <h3>{cocktail.imageURL}</h3>
            <h3>{cocktail.description}</h3>
            <h3>{cocktail.ingredientOne}</h3>
            <h3>{cocktail.amountIngredientOne}</h3>
            <h3>{cocktail.ingredientTwo}</h3>
            <h3>{cocktail.amountIngredientTwo}</h3>
            <h3>{cocktail.ingredientThree}</h3>
            <h3>{cocktail.amountIngredientThree}</h3>
          </article>
        ))}
      </section>
      <Footer />
    </>
  );
};

export default LocalStorage;