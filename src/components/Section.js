// dependencies
import React from 'react';
import {Link} from 'react-router-dom';

// components
import {projects} from './projects';

// css
import '../styles/Section.css';

const Section = () => {
    return (
        <section className='projects-container container mt-5 mb-5'>
            <div className='projects-box row gx-5 gy-5'>
                {projects.map((project)=>{
                    const {id,name,url,img} = project;
                    return(
                    <div key={id} className='project-container col-12 col-md-6 col-lg-4'>
                        <Link to={url} className='project-box card shadow-sm text-decoration-none text-dark'>
                            <div className='project-image'>
                                <img src={img} alt={name} className='card-img-top' />
                            </div>
                            <div className='project-body card-body border-top'>
                                <div className='card-title h5 text-center'>
                                    {name}
                                </div>
                            </div>
                        </Link>
                    </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Section
