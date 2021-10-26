// dependencies
import React from 'react';
import {Link} from 'react-router-dom';

// components
import {projects} from './projects';

// css
import '../styles/Section.css';

// assets
import {
    Default
} from '../assets/index';

const Section = () => {
    return (
        <section className='projects-container container mt-5'>
            <div className='projects-box row'>
                <div className='project-container col-12 col-md-6 col-lg-4'>
                    {projects.map((project)=>{
                        const {id,name,url} = project;
                        return(
                        <Link to={url} key={id} className='project-box card shadow-sm text-decoration-none text-dark'>
                            <div className='project-image'>
                                <img src={Default} alt={name} className='card-img-top' />
                            </div>
                            <div className='project-body card-body'>
                                <div className='card-title h5 text-center'>
                                    {name}
                                </div>
                            </div>
                        </Link>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Section
