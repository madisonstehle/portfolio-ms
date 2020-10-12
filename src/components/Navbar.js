import React from 'react';

import Navitem from './Navitem.js';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <Navitem item='Home' link='/' />
                <Navitem item='About' link='/about' />
                <Navitem item='Projects' link='/projects' />
                <Navitem item='Contact Me' link='/contact' />
            </ul>
        </nav>
    )
}

export default Navbar;
