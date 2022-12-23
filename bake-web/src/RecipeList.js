import React, { useState } from 'react'

const RecipeList = ({ recipes }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="homeGoals">
      <h3> Recipes</h3>
      {recipes.map(recipe => (
        <div className="recipeListed" key={recipe.uuid} >

          <div className="recipeContainer">
            <div className="RecipeImageC">
              <img src={recipe.images} alt="Delicious recipe" className="recipeImages"/>
            </div>
            <div className="RecipeInfoC">
              <h4>{recipe.name}</h4>
              <p>Written by: {recipe.author}</p>
              <p>Recipe difficulty: {recipe.difficulty}</p>
              <p>Preparation time: {recipe.preptime}</p>
              <p>Cooking time: {recipe.cooktime}</p>
              <p>Yield: {recipe.yield}</p>
              
              <b><button type="button" className="viewButton"onClick={() => setShow(!show)}>
                {show === true ? "Hide Details" : "Show Details"} </button></b>
            </div>
          </div>
          {
            show && <div className="detailsDiv">
            <div className="DetailsContainer">
            <div className="RecipeDescription">
                <h2>Description</h2> 
              <p>{recipe.description}</p>
              </div>
              <div className="RecipeIngredients">
                <ul className="ingredients">
                  <h2>Ingredients</h2>
                  {
                    recipe.ingredients.map((ingredient) => {
                      return (
                        <li>
                          {ingredient.ingredient} - {ingredient["measurement-weight"]}{" "}
                          {ingredient["measurement-type"]}{" "}
                          {ingredient["measurement-size"]}{" "}
                          {ingredient["note"]}
                        </li>
                      );
                    })
                  }
                </ul>
              </div>
              <div className="RecipeValues">
              <h2>Nutririon</h2>     
              <p>{recipe.nutrition}</p>             
              </div> 
              
            </div>
            <div className="instructions">
            <h2>Instructions</h2>     
            <p>{recipe.instructions}</p>
            </div>

            </div>
          }
        </div>       
      ))}

    </div>
  );
}

export default RecipeList;
