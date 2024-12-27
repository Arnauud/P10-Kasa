import React from 'react';
import logo from "../../assets/logokasa.svg"
import Nav from '../Nav/Nav.jsx';

function Header (){
    return(

        <header className="header-Section">
            <img className="logo" src={logo} alt="Kasa Logo" />
            <Nav />
        </header>

    )
}

export default Header