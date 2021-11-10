// dependencies
import React from 'react';

// components
import Nav from '../components/Nav';

// css
import '../styles/FlipWatch.css';

const FlipWatch = () => {
    return (
        <>
            <Nav></Nav>
            <section className='container'>
                <div className='row mt-5 text-center'>
                    <div className='h1'>
                        Flip Watch
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='flip-watch-container'>
                        <div className='flip-clock'>
                            <div className='digit' data-digit-before='0' data-digit-after='1'></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FlipWatch
