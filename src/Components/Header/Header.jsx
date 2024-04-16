// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import ChefHatImage from './ChefHat.png';
import SearchBar from '../SearchBar';

function Header({ setSearchQuery }) {
  return (
    <header className="Header">
      <ul>
        <li>
          <Link to="/" className="HeaderLink">
            <img className="HeaderPhoto" src={ChefHatImage} alt="chef hat" />
            <span className="HeaderText">Whisked Away</span>
          </Link>
        </li> 
       
      </ul>
      <div className='searchbar'>
            <SearchBar  setSearchQuery={setSearchQuery} />
      </div>
    </header>
  );
}

export default Header;
