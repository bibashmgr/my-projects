// dependencies
import React from 'react';
import { useState } from 'react';

// components
import Nav from '../../components/Nav';

// css
import './index.css';

let totalms = 0;

const Stopwatch = () => {

    const [play, setPlay] = useState('active');
    const [pause, setPause] = useState('inactive');
    const [reset, setReset] = useState('inactive');

    const [values,setValues] = useState({
        hours:'00',
        mins:'00',
        secs:'00'
    });

    const {hours,mins,secs} = values;

    const handleClick = (e) => {
        if(e.target.id === 'play'){
            setPlay('inactive');
            setPause('active');
            setReset('active');

            window.watchStart = setInterval(() => {
                totalms = totalms + 1000;

                let textHour = Math.floor((totalms % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
                let textMin = Math.floor((totalms % (60 * 60 * 1000)) / ( 60 * 1000));
                let textSec = Math.floor((totalms % (60 * 1000)) / (1000));

                if(textHour < 10){
                    textHour = '0' + textHour;
                }
                if(textMin < 10){
                    textMin = '0' + textMin;
                }
                if(textSec < 10){
                    textSec = '0' + textSec;
                }

                setValues({hours:textHour, mins:textMin, secs:textSec});
            }, 1000);
        }

        if(e.target.id === 'pause'){
            setPlay('active');
            setPause('inactive');
            setReset('active');

            clearInterval(window.watchStart);
        }

        if(e.target.id === 'reset'){
            setPlay('active');
            setPause('inactive');
            setReset('inactive');

            clearInterval(window.watchStart);
            setValues({hours:'00', mins:'00', secs:'00'});
            totalms = 0;
        }

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
                            <div className='h1' id='div-hours'>{hours}</div>
                        </div>
                        <div className='row'>
                            <label htmlFor="hours">hours</label>
                        </div>
                    </div>
                    <div className='col-2 col-lg-1'>
                        <div className='row'>
                            <div className='h1' id='div-mins'>{mins}</div>
                        </div>
                        <div className='row'>
                            <label htmlFor="mins">mins</label>
                        </div>
                    </div>
                    <div className='col-2 col-lg-1'>
                        <div className='row'>
                            <div className='h1' id='div-secs'>{secs}</div>
                        </div>
                        <div className='row'>
                            <label htmlFor="secs">secs</label>
                        </div>
                    </div>

                </form>

                <div className='row mt-5 justify-content-center text-center'>
                    <div className='col-2 col-lg-1 h1'>
                        <i id='pause' className={'bi bi-pause-circle text-warning ' + pause} onClick={handleClick}></i>
                    </div>
                    <div className='col-2 col-lg-1 h1'>
                        <i id='play' className={'bi bi-play-circle text-success ' + play} onClick={handleClick}></i>
                    </div>
                    <div className='col-2 col-lg-1 h1'>
                        <i id='reset' className={'bi bi-arrow-repeat text-danger ' + reset} onClick={handleClick}></i>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Stopwatch
