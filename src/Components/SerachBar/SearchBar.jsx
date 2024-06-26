// SearchBar.jsx
import { MagnifyingGlass } from '@phosphor-icons/react';
import React from 'react';
import "./SearchBar.css"
function SearchBar({ setSearchQuery }) {
    const handleSearch = (e) => {
        setSearchQuery(e.target.value.toLowerCase()); // Pass the lowercase search query to the parent component
    };

    return (  <div className='searchCtn'> <MagnifyingGlass size={20} />
        <input   
        className='search'
            type="text"
            placeholder="Search recipes..."
            onChange={handleSearch}
        /></div>
    );
}

export default SearchBar;
