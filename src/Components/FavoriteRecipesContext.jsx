// FavoriteRecipesContext.js
import React, { createContext, useState, useContext } from 'react';

const FavoriteRecipesContext = createContext();

export const useFavoriteRecipes = () => {
    return useContext(FavoriteRecipesContext);
};

export const FavoriteRecipesProvider = ({ children }) => {
    const [favoriteRecipes, setFavoriteRecipes] = useState([]);

    const toggleFavorite = (recipeId) => {
        if (favoriteRecipes.includes(recipeId)) {
            setFavoriteRecipes(favoriteRecipes.filter(id => id !== recipeId));
        } else {
            setFavoriteRecipes([...favoriteRecipes, recipeId]);
        }
    };

    const isFavorite = (recipeId) => {
        return favoriteRecipes.includes(recipeId);
    };

    return (
        <FavoriteRecipesContext.Provider value={{ favoriteRecipes, toggleFavorite, isFavorite }}>
            {children}
        </FavoriteRecipesContext.Provider>
    );
};
