// dependencies
import React from 'react';
import {useState} from 'react';

// components
import Nav from '../components/Nav';

// css
import '../styles/Countdown.css';

const Countdown = () => {

    // const initalValue = {
    //     day: 0,
    //     hour: 0,
    //     min: 0,
    //     sec: 0
    // }

    const [play, setPlay] = useState(false);
    const [btn, setBtn] = useState('bi bi-play-circle text-success');
    // const [value, setValue] = useState(initalValue);

    const handleCount = () => {
        setPlay(!play);
        if(btn.search(/play/) > 0){
            setBtn('bi bi-arrow-repeat text-danger');
        }else {
            setBtn('bi bi-play-circle text-success');
        }
    };

    return (
        <>
            <Nav></Nav>
            <section className='container mt-5'>

                <div className='row text-center'>
                    <div className='h1'>
                        Countdown
                    </div>
                </div>

                <form className='row mt-5 form-container'>

                    <div className='col-2 col-lg-1'>
                        <div className='row'>
                            <input type="text" className='h1' id='days' placeholder='00' autoComplete='off' maxLength='2' />
                        </div>
                        <div className='row'>
                            <label htmlFor="days">days</label>
                        </div>
                    </div>
                    <div className='col-2 col-lg-1'>
                        <div className='row'>
                            <input type="text" className='h1' id='hours' placeholder='00' autoComplete='off' maxLength='2' />
                        </div>
                        <div className='row'>
                            <label htmlFor="hours">hours</label>
                        </div>
                    </div>
                    <div className='col-2 col-lg-1'>
                        <div className='row'>
                            <input type="text" className='h1' id='mins' placeholder='00' autoComplete='off' maxLength='2' />
                        </div>
                        <div className='row'>
                            <label htmlFor="mins">mins</label>
                        </div>
                    </div>
                    <div className='col-2 col-lg-1'>
                        <div className='row'>
                            <input type="text" className='h1' id='secs' placeholder='00' autoComplete='off' maxLength='2' />
                        </div>
                        <div className='row'>
                            <label htmlFor="secs">secs</label>
                        </div>
                    </div>

                </form>

                <div className='row mt-5 text-center'>
                    <div className='h1'>
                        <i className={btn} id='button' onClick={handleCount}></i>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Countdown
