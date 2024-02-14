import React from 'react';
import SideNav from './SideNav';

function Header() {
    return (
        <header className="header">
            <img src="https://img.freepik.com/free-vector/gradient-bookstore-logo_23-2149332421.jpg?size=626&ext=jpg" alt="Logo" className="logo"></img>
            <h1>Book Nerd</h1>
            <SideNav />
        </header>
    );
}

export default Header;
