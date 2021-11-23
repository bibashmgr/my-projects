// dependencies
import React from 'react';
import {useState,useEffect} from 'react';

// components
import Nav from '../../components/Nav'

// css
import './index.css';

const DigitalClock = () => {

    const [values,setValues] = useState({
        hours: '00',
        mins: '00',
        secs: '00'
    });

    const {hours,mins,secs} = values;

    useEffect(()=>{
        let clockInterval = setInterval(()=>{
            let currentTime = new Date();
            let currentHours = currentTime.getHours();
            let currentMins = currentTime.getMinutes();
            let currentSecs = currentTime.getSeconds();

            if(currentHours < 10){
                currentHours = '0' + currentHours;
            }
            if(currentMins < 10){
                currentMins = '0' + currentMins;
            }
            if(currentSecs < 10){
                currentSecs = '0' + currentSecs;
            }

            setValues({hours:currentHours,mins:currentMins,secs:currentSecs});
        },1000);

        return () => {
            clearInterval(clockInterval);
        }
    },[]);

    return (
        <>
            <Nav></Nav>
            <section className='container mt-5'>
                <div className='row text-center'>
                    <div className='col h1'>
                        Digital Clock
                    </div>
                </div>
                <div className='row mt-5 justify-content-center text-center'>
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
                </div>
            </section>
        </>
    )
}

export default DigitalClock
