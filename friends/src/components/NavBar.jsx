import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(){
    return (
        <nav className='navbar'>
            <h2>Friends</h2>
            <Link to='/'>Login</Link>
            <Link to='/friends'>Friends</Link>
        </nav>
    )
}

export default NavBar;