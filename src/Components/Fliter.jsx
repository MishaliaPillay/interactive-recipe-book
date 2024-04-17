// Filter.jsx

import React from 'react';
import { useFavoriteRecipes } from './FavoriteRecipesContext'; // Import FavoriteRecipesContext

function Filter({ filterOptions, selectedFilter, onSelectFilter }) {
    const { isFavorite } = useFavoriteRecipes(); // Access isFavorite function from context

    return (
        <select value={selectedFilter} onChange={(e) => onSelectFilter(e.target.value)}>
            <option value="all">All</option>
            {filterOptions.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
            <option value="Favorites">Favorites</option> {/* Add Favorites option */}
        </select>
    );
}

export default Filter;
