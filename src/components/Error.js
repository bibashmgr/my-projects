import React from 'react';
import {Link} from 'react-router-dom';

const Error = () => {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center' style={{height:'45vh'}}>
            <div className='h1 text-danger'>Error: Page Not Found</div>
            <Link to='/' className='btn btn-link' >Go Back</Link>
        </div>
    )
}

export default Error
