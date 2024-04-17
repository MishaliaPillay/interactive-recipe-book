import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import ChefHatImage from './ChefHat.png';
import SearchBar from '../SerachBar/SearchBar'; // Corrected import path
import Filter from '../Fliter'; // Corrected import path
import { List, X } from '@phosphor-icons/react'; // Import Phosphor icons

import recipesData from "../Data";
function Header({ setSearchQuery, filterValue, setFilterValue, onSelectFilter }) {
    const filterOptions = ['Breakfast', 'Dinner', 'Lunch', 'Dessert', 'Keto', 'Vegan', 'Vegetarian'];
    const [isFilterOpen, setIsFilterOpen] = useState(false); // State to toggle filter options
    const [isMenuVisible, setIsMenuVisible] = useState(false); // State to toggle menu visibility
    const [isLoading, setIsLoading] = useState(true); // State to track loading state

    useEffect(() => {
        // Simulate asynchronous data loading
        setTimeout(() => {
            setIsLoading(false);
        }, 1000); // Adjust the timeout as per your actual data loading mechanism
    }, []);

 

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
<<<<<<< HEAD
<<<<<<< HEAD
        // Toggle search bar visibility
        const searchBar = document.querySelector('.searchbar');
        if (searchBar) {
            searchBar.classList.toggle('showSearchBar');
        }
        console.log(recipesData);
=======
>>>>>>> parent of 187c1f8 (17/04)
=======
>>>>>>> parent of 187c1f8 (17/04)
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

                {!isLoading && (
                    <section className='filter'>
                        <Filter filterOptions={filterOptions} selectedFilter={filterValue} onSelectFilter={onSelectFilter}  recipesData={recipesData}/>
                    </section>
<<<<<<< HEAD
<<<<<<< HEAD
                )}
=======
                
>>>>>>> parent of 187c1f8 (17/04)
=======
                
>>>>>>> parent of 187c1f8 (17/04)

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
