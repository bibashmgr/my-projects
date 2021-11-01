// dependencies
import React from 'react';
// import { useState } from 'react';

// components
import Nav from '../components/Nav';

// css
import '../styles/Stopwatch.css';

const Stopwatch = () => {

    const playWatch = (e) => {
    };

    return (
        <>
            <Nav></Nav>
            <section className='container mt-5'>

                <div className='row text-center'>
                    <div className='h1'>
                        Stopwatch
                    </div>
                </div>

                <form className='row mt-5 form-container'>

                    <div className='col-2 col-lg-1'>
                        <div className='row'>
                            <div className='h1' id='div-hours'>00</div>
                        </div>
                        <div className='row'>
                            <label htmlFor="hours">hours</label>
                        </div>
                    </div>
                    <div className='col-2 col-lg-1'>
                        <div className='row'>
                            <div className='h1' id='div-mins'>00</div>
                        </div>
                        <div className='row'>
                            <label htmlFor="mins">mins</label>
                        </div>
                    </div>
                    <div className='col-2 col-lg-1'>
                        <div className='row'>
                            <div className='h1' id='div-secs'>00</div>
                        </div>
                        <div className='row'>
                            <label htmlFor="secs">secs</label>
                        </div>
                    </div>

                </form>

                <div className='row mt-5 justify-content-center text-center'>
                    <div className='col-2 col-lg-1 h1'>
                        <i className='bi bi-pause-circle text-warning'></i>
                    </div>
                    <div className='col-2 col-lg-1 h1'>
                        <i className='bi bi-play-circle text-success' onClick={playWatch}></i>
                    </div>
                    <div className='col-2 col-lg-1 h1'>
                        <i className='bi bi-arrow-repeat text-danger'></i>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Stopwatch
