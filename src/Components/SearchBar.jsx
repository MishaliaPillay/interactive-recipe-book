// SearchBar.jsx

import React from 'react';

function SearchBar({ setSearchQuery }) {
    const handleSearch = (e) => {
        setSearchQuery(e.target.value.toLowerCase()); // Pass the lowercase search query to the parent component
    };

    return (
        <input
            type="text"
            placeholder="Search recipes..."
            onChange={handleSearch}
        />
    );
}

export default SearchBar;
