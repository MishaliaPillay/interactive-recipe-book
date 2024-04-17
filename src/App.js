// App.js
import React, { useState } from 'react';
import RecipeLinks from './Components/RecipeLinks/RecipeLinks';
import Header from './Components/Header/Header';
import recipesData from "./Components/Data";
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { FavoriteRecipesProvider } from './Components/FavoriteRecipesContext';
function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterValue, setFilterValue] = useState('all');
  const onSelectFilter = (value) => {
    setFilterValue(value); // Update the filter value when an option is selected
  };
  return (
  <FavoriteRecipesProvider>
         <BrowserRouter>
        <Header setSearchQuery={setSearchQuery} filterValue={filterValue} setFilterValue={setFilterValue} onSelectFilter={onSelectFilter} />
        <Routes>
        <Route path="/" element={<RecipeLinks recipes={recipesData} searchQuery={searchQuery} filterValue={filterValue} />} />
        </Routes>
      </BrowserRouter>
    </FavoriteRecipesProvider>
  );
}

export default App;
