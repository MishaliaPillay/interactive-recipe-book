import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Header.css'; // Import the CSS file
import ChefHatImage from './ChefHat.png'; // Import the image file
import "./Header.css"
function Header() {
    return (
        <>
            {/* Wrap the content in a Link component */}
            <Link to="/">
                
                {/* Apply the class to the image */}
                <img className="HeaderPhoto" src={ChefHatImage} alt="chef hat" /><p>Cheese</p>
            </Link>
        </>
    );
}

export default Header;
