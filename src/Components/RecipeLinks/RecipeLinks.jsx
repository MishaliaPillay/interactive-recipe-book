// RecipeLinks.jsx

import React, { useState } from 'react';
import recipes from '../Data'; // Import recipe data
import "./RecipeLinks.css"

function RecipeLinks({ recipes, searchQuery }) { 
    // Extract the recipes array from the recipes object
    const recipesArray = recipes.recipes;

    // Filter recipes based on the search query
    const filteredRecipes = recipesArray.filter(recipe =>
        recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    console.log('Search Query:', searchQuery); // Log the search query
    console.log('Filtered Recipes:', filteredRecipes); // Log the filtered recipes

    //Checks whether a user has opened a recipe and closes other open recipes - so that one recipe is opened at a time.
    const [openRecipeId, setOpenRecipeId] = useState(null);

    //The recipe name is the link to the recipe and when the name is clicked it toggles the rest of the recipes visibility -opens and closes the recipe container
    const toggleRecipe = (recipeId) => {
        setOpenRecipeId(openRecipeId === recipeId ? null : recipeId);
    };

    return (
        <>
            <h1 className='title'>Recipes</h1>
            <ul>
                {filteredRecipes.map(recipe => (
                    <li className='recipeCtn' key={recipe.id}>
                      <img src={recipe.image} alt={recipe.name} className='recipeIcons'/>  <button className='recipeBtn' onClick={() => toggleRecipe(recipe.id)}>{recipe.name} </button>
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
                                <p className='tags'>Tags: {recipe.tags.join(', ')}</p>
                                <p>Rating: {recipe.rating}</p>
                                <p>Review Count: {recipe.reviewCount}</p>
                                <p>Meal Type: {recipe.mealType.join(', ')}</p>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default RecipeLinks;
