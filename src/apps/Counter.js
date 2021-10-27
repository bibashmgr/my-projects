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
            <section className='container mt-5'>
                <div className='row text-center'>
                    <div className='col'>
                        <div className='h1'>
                            Counter
                        </div>
                    </div>
                </div>
                <div className='row text-center mt-5'>
                    <div className='col'>
                        <div className='value'>
                            {value}
                        </div>
                    </div>
                </div>
                <div className='row text-center buttons'>
                    <div className='col-3 col-sm-2 col-md-1'>
                        <i className="bi bi-dash-circle text-warning h1" onClick={handleSub}></i>
                    </div>
                    <div className='col-3 col-sm-2 col-md-1'>
                        <i className="bi bi-arrow-repeat text-danger h1" onClick={handleReset}></i>
                    </div>
                    <div className='col-3 col-sm-2 col-md-1'>
                        <i className="bi bi-plus-circle text-success h1" onClick={handleAdd}></i>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Counter
