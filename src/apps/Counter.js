// dependencies
import React from 'react';
import {useState} from 'react';

// components
import Nav from '../components/Nav';

// css
import '../styles/Counter.css';

const Counter = () => {
    const [value, setValue] = useState(0);

    const handleAdd = () => {
        setValue(value + 1);
    }
    const handleSub = () => {
        setValue(value - 1);
    }
    const handleReset = () => {
        setValue(0);
    }

    return (
        <>
            <Nav></Nav>
            <section className='container mt-5 counter-container'>
                <div className='w-50 text-center mt-5 pb-5'>
                    <div className='h1 mt-5'>
                        Counter
                    </div>
                    <div className='mt-5'>
                        <div className='value'>
                            {value}
                        </div>
                        <div className='buttons row mt-2 w-50 mx-auto pb-5'>
                            <div onClick={handleSub} className='col-4 text-end'>
                                <i class="bi bi-dash-circle text-warning fs-1"></i>
                            </div>
                            <div onClick={handleReset} className='col-4 text-center'>
                                <i class="bi bi-arrow-repeat text-danger fs-1"></i>
                            </div>
                            <div onClick={handleAdd} className='col-4 text-start'>
                                <i class="bi bi-plus-circle text-success fs-1"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Counter
