import React from 'react';
import { Nav } from 'react-bootstrap';

import Navitem from './Navitem.js';

const Navbar = () => {
    return (
        <Nav className="sidebar">
            <ul>
                <Navitem item='Home' link='/' />
                <Navitem item='About' link='/about' />
                <Navitem item='Projects' link='/projects' />
                <Navitem item='Contact Me' link='/contact' />
            </ul>
        </Nav>
    )
}

export default Navbar;
