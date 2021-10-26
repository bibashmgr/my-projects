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
            <section className='container mt-5 text-center'>
                <div className='h1'>
                    Counter
                </div>
                <div className='mt-5'>
                    <h1 className='value'>
                        {value}
                    </h1>
                    <div className='buttons'>
                        <button type='button' className='btn' onClick={handleSub}>Decrease</button>
                        <button type='button' className='btn' onClick={handleReset}>Reset</button>
                        <button type='button' className='btn' onClick={handleAdd}>Increase</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Counter
