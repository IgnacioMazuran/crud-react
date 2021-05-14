import React from 'react';
import {Link} from 'react-router-dom';
const Menu = () => {
    return (
        <div className='mw-100'>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark p-3 mw-200 ms-auto ' >
                <ul className='navbar-nav mr-auto'>
                    <li className='nav-item'>
                    <Link className='nav-link' to='/'>Inicio</Link>
                    </li>
                    <li className='nav-item'>
                    <Link className='nav-link' to='/admin'>Admin</Link>
                    </li>
                    <li className='nav-item'>
                    <Link className='nav-link' to='/login'>Login</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Menu;