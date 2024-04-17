// FavoriteRecipesContext.js
import React, { createContext, useContext, useState } from 'react';

export const FavoriteRecipesContext = createContext();

export const useFavoriteRecipes = () => useContext(FavoriteRecipesContext);

export const FavoriteRecipesProvider = ({ children }) => {
  const [favoriteRecipeIds, setFavoriteRecipeIds] = useState([]);

  const toggleFavorite = (recipeId) => {
    setFavoriteRecipeIds((prevIds) =>
      prevIds.includes(recipeId)
        ? prevIds.filter((id) => id !== recipeId)
        : [...prevIds, recipeId]
    );
  };

  const isFavorite = (recipeId) => favoriteRecipeIds.includes(recipeId);

  return (
    <FavoriteRecipesContext.Provider value={{ toggleFavorite, isFavorite }}>
      {children}
    </FavoriteRecipesContext.Provider>
  );
};
