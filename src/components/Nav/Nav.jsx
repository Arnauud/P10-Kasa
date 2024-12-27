import React from 'react';
import { Link } from 'react-router-dom';

function Nav (){
    return(
    <nav className='nav-Section'>
        <div className='nav-Menu'>
        <Link to="/" className="Home-text">Accueil</Link>
        <Link to="/about" className="About-text">A Propos</Link>
        </div>
    </nav>
    )
}

export default Nav