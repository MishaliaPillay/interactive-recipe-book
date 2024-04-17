import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard'; // Import the RecipeCard component
import "./RecipeLinks.css";

function RecipeLinks({ recipes, searchQuery, filterValue }) { 
    // Extract the recipes array from the recipes object
    const recipesArray = recipes.recipes;

    // State to hold the filtered recipes
    const [filteredRecipes, setFilteredRecipes] = useState([]);

    // Update filtered recipes whenever recipes or filter value change
    useEffect(() => {
        const updatedFilteredRecipes = recipesArray.filter(recipe =>
            recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
            (filterValue === 'all' || 
                (filterValue === 'Favorites' && recipe.isFavorite) || // Include favorites when "Favorites" is selected
                (recipe.tags.includes(filterValue) || recipe.mealType.includes(filterValue)))
        );
        setFilteredRecipes(updatedFilteredRecipes);
    }, [recipesArray, searchQuery, filterValue]);

    console.log('Search Query:', searchQuery); // Log the search query
    console.log('Filter Value:', filterValue); // Log the filter value
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
                    <RecipeCard
                        key={recipe.id}
                        recipe={recipe}
                        isOpen={openRecipeId === recipe.id}
                        toggleRecipe={toggleRecipe}
                        isFavorite={recipe.isFavorite} // Pass isFavorite function to RecipeCard
                        updateRecipe={setFilteredRecipes} // Pass updateRecipe function to RecipeCard
                    />
                ))}
            </ul>
        </>
    );
}

export default RecipeLinks;