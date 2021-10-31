// dependencies
import React from 'react';
import {useState} from 'react';

// components
import Nav from '../components/Nav';

// css
import '../styles/Countdown.css';

const Countdown = () => {

    const [play, setPlay] = useState(false);
    const [btn, setBtn] = useState('bi bi-play-circle text-success');

    const [values,setValues] = useState({
        days: 0,
        hours: 0,
        mins: 0,
        secs: 0,
    });
    let {days,hours,mins,secs} = values;

    const handleCount = () => {
        setPlay(!play);
        if(btn.search(/play/) > 0){
            setBtn('bi bi-arrow-repeat text-danger');
            let sec = secs * 1000;
            let min = mins * 1000 * 60;
            let hour = hours * 1000 * 60 * 60;
            let day = days * 1000 * 60 * 60 * 24;

            let totalms = sec + min + hour + day;

            setInterval(()=> {
                totalms = totalms - 1000;

                let textDay = Math.floor(totalms / (24 * 60 * 60 * 1000));
                let textHour = Math.floor((totalms % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
                let textMin = Math.floor((totalms % (60 * 60 * 1000)) / ( 60 * 1000));
                let textSec = Math.floor((totalms % (60 * 1000)) / (1000))
                if(textDay < 10){
                    textDay = '0' + textDay;
                }
                if(textHour < 10){
                    textHour = '0' + textHour;
                }
                if(textMin < 10){
                    textMin = '0' + textMin;
                }
                if(textSec < 10){
                    textSec = '0' + textSec;
                }

                setValues({days:textDay, hours:textHour, mins:textMin, secs:textSec});
            },1000);
        }else {
            setBtn('bi bi-play-circle text-success');
            window.location.reload(true);
        }
    };

    const updateValue = (e) => {
        if(e.target.id === 'input-days'){
            setValues({...values, days:e.target.value});
        }
        if(e.target.id === 'input-hours'){
            setValues({...values, hours:e.target.value});
        }
        if(e.target.id === 'input-mins'){
            setValues({...values, mins:e.target.value});
        }
        if(e.target.id === 'input-secs'){
            setValues({...values, secs:e.target.value});
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
                            <input type="text" className='h1' id='input-days' value={days} autoComplete='off' maxLength='2' onChange={updateValue} />
                        </div>
                        <div className='row'>
                            <label htmlFor="days">days</label>
                        </div>
                    </div>
                    <div className='col-2 col-lg-1'>
                        <div className='row'>
                            <input type="text" className='h1' id='input-hours' value={hours} autoComplete='off' maxLength='2' onChange={updateValue} />
                        </div>
                        <div className='row'>
                            <label htmlFor="hours">hours</label>
                        </div>
                    </div>
                    <div className='col-2 col-lg-1'>
                        <div className='row'>
                            <input type="text" className='h1' id='input-mins' value={mins} autoComplete='off' maxLength='2' onChange={updateValue} />
                        </div>
                        <div className='row'>
                            <label htmlFor="mins">mins</label>
                        </div>
                    </div>
                    <div className='col-2 col-lg-1'>
                        <div className='row'>
                            <input type="text" className='h1' id='input-secs' value={secs} autoComplete='off' maxLength='2' onChange={updateValue} />
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
