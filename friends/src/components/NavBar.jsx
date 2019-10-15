import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props){

    const logout = e => {
        localStorage.removeItem('token');

        props.history.replace('/');
    }

    return (
        <nav className='navbar'>
            <h2>Friends</h2>
            <Link to='/'>Login</Link>
            <Link to='/friends'>Friends</Link>
            <Link to='/' onClick={logout}>Logout</Link>
        </nav>
    )
}

export default NavBar;