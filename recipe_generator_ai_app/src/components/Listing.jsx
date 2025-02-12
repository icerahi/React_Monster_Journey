export default function ({ ingredients, getRecipe }) {
  return (
    <>
      <div className="listing">
        <h1 className="title">Ingredients on hand:</h1>
        <ul className="list">
          {ingredients.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {ingredients.length > 3 && (
        <div className="get_recipe">
          <div className="text">
            <h3 classNa me="title">
              Ready for a recipe?
            </h3>
            <p className="info">
              Generate a recipe from your list of ingredients.
            </p>
          </div>
          <button onClick={getRecipe} className="get_recipe_btn">
            get a recipe
          </button>
        </div>
      )}
    </>
  );
}
