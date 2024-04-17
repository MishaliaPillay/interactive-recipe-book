import React from 'react';
import { useFavoriteRecipes } from './FavoriteRecipesContext';

function Filter({ filterOptions, selectedFilter, onSelectFilter, recipesData }) {
    const { isFavorite } = useFavoriteRecipes();

    const handleSelectFilter = (value) => {
        if (value === 'Favorites') {
            if (Array.isArray(recipesData)) {
                // Filter favorite recipes from the array
                const favoriteRecipes = recipesData.filter(recipe => isFavorite(recipe.id));
                onSelectFilter(favoriteRecipes);
            } else {
                console.error('recipesData is not available or is not an array.');
                // Handle the error or provide a default behavior
            }
        } else {
            onSelectFilter(value);
        }
    };

    return (
        <select value={selectedFilter} onChange={(e) => handleSelectFilter(e.target.value)}>
            <option value="all">All</option>
            {filterOptions.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
            <option value="Favorites">Favorites</option>
        </select>
    );
}

export default Filter;
