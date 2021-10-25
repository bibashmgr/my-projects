import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Error = () => {
  return (
    <Router>
        <div className='container mt-5 text-center'>
            <div className='h1'>
                Error: Page Not Found
            </div>
            <div>
                <Link to='/'>
                    <div className='btn btn-dark mt-2 text-uppercase fw-bold'>
                        Go to Home
                    </div>
                </Link>
            </div>
        </div>
    </Router>
  );
}

export default Error;
