import React, { useState } from 'react';

function Search({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        // Pass the search term to the parent component
        onSearch(value);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search for recipe..."
                value={searchTerm}
                onChange={handleInputChange}
            />
        </div>
    );
}

export default Search;
