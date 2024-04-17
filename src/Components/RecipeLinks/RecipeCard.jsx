import React from 'react';
import { useFavoriteRecipes } from '../FavoriteRecipesContext';
import { Heart } from '@phosphor-icons/react';
function RecipeCard({ recipe, isOpen, toggleRecipe,updateRecipe }) {
    const { toggleFavorite, isFavorite } = useFavoriteRecipes();
    const handleFavoriteClick = () => {
        // Toggle favorite status and update tags
        toggleFavorite(recipe.id);
        updateRecipe(prevRecipes => {
            const updatedRecipes = prevRecipes.map(prevRecipe => {
                if (prevRecipe.id === recipe.id) {
                    return { ...prevRecipe, isFavorite: !prevRecipe.isFavorite };
                }
                return prevRecipe;
            });
            return updatedRecipes;
        });
    };

    return (
        <li className='recipeCtn' key={recipe.id}>
            <img src={recipe.image} alt={recipe.name} className='recipeIcons' />
            <button className='recipeBtn' onClick={() => toggleRecipe(recipe.id)}>{recipe.name}</button>
            <button className='favoriteBtn' onClick={handleFavoriteClick}>
                {isFavorite(recipe.id) ? (
                    <Heart size={32} color="#FBF6EE" weight="fill" />
                ) : (
                    <Heart size={32} color="#FBF6EE" weight="regular" />
                )}
            </button>
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
                    <p className='tags'>Tags: {isFavorite(recipe.id) ? [...recipe.tags, 'Favorites'].join(', ') : recipe.tags.join(', ')}</p>
                    <p>Rating: {recipe.rating}</p>
                    <p>Review Count: {recipe.reviewCount}</p>
                    <p>Meal Type: {recipe.mealType.join(', ')}</p>
                </div>
            )}
        </li>
    );
}

export default RecipeCard;