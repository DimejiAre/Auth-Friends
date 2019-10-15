import React from 'react';
import { Link } from 'react-router-dom';
import './scss/NavBar.scss';

function NavBar(props) {

    const logout = e => {
        localStorage.removeItem('token');

        props.history.replace('/');
    }

    return (
        <nav className='navbar'>
            <h2>Friends</h2>
            <div>
                <Link to='/'>Login</Link>
                <Link to='/friends'>Friends</Link>
                <Link to='/' onClick={logout}>Logout</Link>
            </div>
        </nav>
    )
}

export default NavBar;