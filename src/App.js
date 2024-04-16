// App.js
import React, { useState } from 'react';
import RecipeLinks from './Components/RecipeLinks/RecipeLinks';
import Header from './Components/Header/Header';
import recipesData from "./Components/Data";
import { Route, BrowserRouter, Routes } from 'react-router-dom';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <BrowserRouter>
      <Header setSearchQuery={setSearchQuery} />
      <Routes>
        <Route path="/" element={<RecipeLinks recipes={recipesData} searchQuery={searchQuery} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
