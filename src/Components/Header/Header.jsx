// Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import ChefHatImage from './ChefHat.png';
import SearchBar from '../SerachBar/SearchBar';
import Filter from '../Fliter';
import { List, X } from '@phosphor-icons/react'; // Import Phosphor icons

function Header({ setSearchQuery, filterValue, setFilterValue, onSelectFilter }) {
    const filterOptions = ["Favorites", 'Breakfast', "Dinner", "Lunch", 'Dessert', 'Keto', 'Vegan', 'Vegetarian'];
    const [isFilterOpen, setIsFilterOpen] = useState(false); // State to toggle filter options
    const [isMenuVisible, setIsMenuVisible] = useState(false); // State to toggle menu visibility

    const toggleFilter = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    return (
        <header className={`Header ${isMenuVisible ? 'menuVisible' : ''}`}>
            <div className="HeaderContainer">
                <Link to="/" className="HeaderLink">
                    <img className="HeaderPhoto" src={ChefHatImage} alt="chef hat" />
                    <span className="HeaderText">Whisked Away</span>
                </Link>

                <section className={`menuToggle ${isMenuVisible ? 'hide' : ''}`} onClick={toggleMenu}>
                    <List size={32} />
                </section>

          
                    <section className='filter'>
                        <Filter filterOptions={filterOptions} filterValue={filterValue} setFilterValue={setFilterValue} onSelectFilter={onSelectFilter} />
                    </section>
                

                <section className='searchbar'>
                    <SearchBar setSearchQuery={setSearchQuery} />
                </section>

                <section className={`closeButton ${!isMenuVisible ? 'hide' : ''}`} onClick={toggleMenu}>
                    <X size={32} />
                </section>
            </div>
        </header>
    );
}

export default Header;
