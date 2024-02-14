import React from 'react';
import {Link, NavLink} from 'react-router-dom';

function SideNav() {
    return (
        <nav className="side-nav">
            <ul>
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/registration"}>Registration</NavLink></li>
                <li><NavLink to={"/"}>Bestsellers</NavLink></li>
                <li><NavLink to={"/"}>Categories</NavLink></li>
                <li><NavLink to={"/"}>Contact</NavLink></li>
            </ul>
        </nav>
    );
}

export default SideNav;
