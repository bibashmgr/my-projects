import React from 'react';
import {projects} from './projects';

const  Section = () => {

    console.log(projects);
    return (
        <section className='projects-container container mt-5'>
            <div className='row g-5 card-group'>

                {projects.map((project)=>{
                    const {id,projectName,projectImage,projectUrl} = project;
                    return(
                        <div key={id} className='col-12 col-md-6 col-lg-4'>
                            <div className='project-container card'>
                                <img src={require('../images/blank.jpg').default} alt="counter" className='card-img-top' />
                                <div className='project-body card-body text-center'>
                                    <h5 className='card-title'>{projectName}</h5>
                                </div>
                            </div>
                        </div>
                    );
                })}
            
            </div>
        </section>
    );
}

export default Section;