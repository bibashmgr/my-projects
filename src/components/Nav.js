// dependencies
import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='navbar navbar-brand-center navbar-dark bg-dark'>
            <div className='container-fluid'>
                <Link to='/' className='navbar-brand mx-auto fs-3'>
                    My Projects
                </Link>
            </div>
        </nav>
    )
}

export default Nav
