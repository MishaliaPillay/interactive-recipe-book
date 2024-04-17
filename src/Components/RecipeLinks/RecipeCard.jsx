// RecipeCard.jsx

import React from 'react';

function RecipeCard({ recipe, isOpen, toggleRecipe }) {
    return (
        <li className='recipeCtn' key={recipe.id}>
            <img src={recipe.image} alt={recipe.name} className='recipeIcons' />
            <button className='recipeBtn' onClick={() => toggleRecipe(recipe.id)}>{recipe.name}</button>
            {isOpen && (
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
    );
}

export default RecipeCard;
