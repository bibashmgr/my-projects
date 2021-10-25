import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const  Header = () => {
    return (

        <Router>
            <header className='header-container'>
                <nav className='navbar navbar-dark bg-dark py-3'>
                    <div className='container justify-content-center'>
                        <div className='navbar-brand fw-bolder fs-3'>
                            <Link to='/' className='text-decoration-none text-white'>
                                My React Projects
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>
        </Router>

    );
}

export default Header;
