import React, { useState } from 'react';
import recipes from './Data'; // Import recipe data

function RecipeLinks() { 

    //Checks whether a user has opened a recipe and closes other open recipes - so that one recipe is opened at a time.
    const [openRecipeId, setOpenRecipeId] = useState(null);
//The recipe name is the link to the recipe and when the name is clicked it toggles the rest of the recipes visibility -opens and closes the recipe container
    const toggleRecipe = (recipeId) => {
        setOpenRecipeId(openRecipeId === recipeId ? null : recipeId);
    };

    return (
        <div>
            <h1>Recipe Links</h1>
            <ul>
                {recipes.recipes.map(recipe => (
                    <li key={recipe.id}>
                        <button onClick={() => toggleRecipe(recipe.id)}>{recipe.name}</button>
                        {openRecipeId === recipe.id && (
                            <div>
                                <img src={recipe.image} alt={recipe.name} style={{ maxWidth: '300px' }} />
                                <h3>Ingredients:</h3>
                                <ul>
                                    {recipe.ingredients.map((ingredient, index) => (
                                        <li key={index}>{ingredient}</li>
                                    ))}
                                </ul>
                                <h3>Instructions:</h3>
                                <ol>
                                    {recipe.instructions.map((instruction, index) => (
                                        <li key={index}>{instruction}</li>
                                    ))}
                                </ol>
                                <p>Prep Time: {recipe.prepTimeMinutes} minutes</p>
                                <p>Cook Time: {recipe.cookTimeMinutes} minutes</p>
                                <p>Servings: {recipe.servings}</p>
                                <p>Difficulty: {recipe.difficulty}</p>
                                <p>Cuisine: {recipe.cuisine}</p>
                                <p>Calories Per Serving: {recipe.caloriesPerServing}</p>
                                <p>Tags: {recipe.tags.join(', ')}</p>
                                <p>Rating: {recipe.rating}</p>
                                <p>Review Count: {recipe.reviewCount}</p>
                                <p>Meal Type: {recipe.mealType.join(', ')}</p>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RecipeLinks;