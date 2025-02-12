import Listing from "./Listing";
import { useState } from "react";
import Recipe from "./Recipe";
import { getRecipeFromMistral } from "../ai";

export default function Main() {
  // const ingredients = ["Chicken", "Oregano", "Tomates"];
  const [ingredients, setIngredients] = useState([]);
  const [recipeShow, setRecipeShow] = useState("");

  async function getRecipe() {
    const generatedRecipe = await getRecipeFromMistral(ingredients);
    setRecipeShow(generatedRecipe);
  }
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const formData = new FormData(event.currentTarget);
  //   const newIngredient = formData.get("ingredient");
  //   newIngredient
  //     ? setIngredients([newIngredient, ...ingredients])
  //     : console.log("Input is empty!");
  //   event.currentTarget.reset();
  // };
  //New version of react feature, above code is the older version

  const handleAdding = (formData) => {
    const newIngredient = formData.get("ingredient");
    newIngredient
      ? setIngredients([newIngredient, ...ingredients])
      : console.log("empty input!");
  };

  return (
    <>
      <main>
        {/* input form  */}
        <div className="input_container">
          {/* <form action="" onSubmit={handleSubmit}> */}
          <form action={handleAdding}>
            <input name="ingredient" type="text" placeholder="e.g oregano" />
            <button className="add_btn">+ Add ingredient</button>
          </form>
        </div>

        {/* displaying ingredient list  */}
        {ingredients.length > 0 && (
          <>
            <Listing ingredients={ingredients} getRecipe={getRecipe} />

            {/* suggested recipe section  */}
            {recipeShow && <Recipe recipeShow={recipeShow} />}
          </>
        )}
      </main>
    </>
  );
}
