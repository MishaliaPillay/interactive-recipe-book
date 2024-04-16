import React from 'react'
import RecipeLinks from './Components/RecipeLinks/RecipeLinks'
import Header from './Components/Header/Header'
 import { Route, BrowserRouter, Routes } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>  <Header/>
<Routes> <Route path="/" element={ <RecipeLinks/>} />
    
      </Routes>
    </BrowserRouter>
  )
}

export default App
