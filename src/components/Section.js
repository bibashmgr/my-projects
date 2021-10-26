// dependencies
import React from 'react';
import {Link} from 'react-router-dom';

const Section = () => {
    return (
        <section className='projects-container container mt-5'>
            <div className='projects-box row'>
                <div className='project-container col-12 col-md-6 col-lg-4'>
                    <Link to='/counter' className='project-box card shadow-sm text-decoration-none text-dark'>
                        <div className='project-image'>
                            <img src={require('../assets/default-image.png').default}alt="" className='card-img-top' />
                        </div>
                        <div className='project-body card-body'>
                            <div className='card-title h5 text-center'>
                                Counter
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Section
