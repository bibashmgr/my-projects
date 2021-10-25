import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

// data
import {projects} from './projects';

// css
import './Section.css';

const  Section = () => {
    return (

        <section className='projects-container container mt-5'>
            <div className='row g-5 card-group'>

                {projects.map((project)=>{
                    const {id,projectName,projectImage,projectUrl} = project;
                    return(
                        <div key={id} className='project-container col-12 col-md-6 col-lg-4'>
                            <Router>
                                <Link to={projectUrl} className='text-decoration-none text-dark'>
                                    <div className='project-box card shadow-sm'>
                                        <div className='project-image'>
                                            <img src={projectImage} alt="counter" className='card-img-top' />
                                        </div>
                                        <div className='project-body card-body text-center'>
                                            <h5 className='card-title'>{projectName}</h5>
                                        </div>
                                    </div>
                                </Link>
                            </Router>
                        </div>
                    );
                })}
            
            </div>
        </section>

    );
}

export default Section;