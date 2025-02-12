import ReactMarkdown from "react-markdown";

export default function Recipe({ recipeShow }) {
  return (
    <section className="suggestion" aria-live="polite">
      <h1 className="title">Suggested recipe:</h1>
      {/* {recipeShow} */}
      <ReactMarkdown>{recipeShow}</ReactMarkdown>
      {/* <h1 className="title">Suggested recipe:</h1>
      <p className="info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        inventore consectetur cumque amet similique molestias, dicta quia
      </p>

      <div className="ingredients">
        <h1 className="title">Ingredientss:</h1>
        <ul className="list">
          <li>Chicken breats</li>
          <li>Most of the main spices</li>
          <li>Olive oil</li>
          <li>Heave cream</li>
          <li>Chhicken broth</li>
          <li>Parmeasn cheese</li>
          <li>Spinach</li>
          <li>Olive oil</li>
          <li>Heave cream</li>
          <li>Chhicken broth</li>
          <li>Parmeasn cheese</li>
          <li>Spinach</li>
        </ul>

        <h1 className="title">Instruction:</h1>
        <ol className="list">
          <li>
            Season the Chicken: Season the chicken breasts with salt and pepper
            on both sides.
          </li>
          <li>
            Cook the Chicken: In a large skillet, heat the olive oil over
            medium-high heat. Add the chicken breasts and cook for 5-7 minutes
            on each side, or until golden brown and cooked through. Remove the
            chicken from the skillet and set it aside
          </li>
          <li>
            Sauté Garlic: In the same skillet, reduce the heat to medium. Add
            the minced garlic and sauté for about 1 minu
          </li>
          <li>
            Season the Chicken: Season the chicken breasts with salt and pepper
            on both sides.
          </li>
          <li>
            Cook the Chicken: In a large skillet, heat the olive oil over
            medium-high heat. Add the chicken breasts and cook for 5-7 minutes
            on each side, or until golden brown and cooked through. Remove the
            chicken from the skillet and set it aside
          </li>
          <li>
            Sauté Garlic: In the same skillet, reduce the heat to medium. Add
            the minced garlic and sauté for about 1 minu
          </li>
        </ol>
      </div> */}
    </section>
  );
}
