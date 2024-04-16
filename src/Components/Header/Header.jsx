import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Header.css'; // Import the CSS file
import ChefHatImage from './ChefHat.png'; // Import the image file

function Header() {
    return (
        <div className='Header'>
           <ul >
             <li> {/* Wrap the content in a Link component */}
                 <Link to="/" className="HeaderLink">
                        {/* Apply the class to the image */}
                        <img className="HeaderPhoto" src={ChefHatImage} alt="chef hat" />
                        <span className="HeaderText">Whisked Away</span>
                 </Link>
                </li>
            </ul>
</div>
    );
}

export default Header;
