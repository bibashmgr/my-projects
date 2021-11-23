// dependencies
import React from 'react';
import { useState, useEffect } from 'react';

// components
import Nav from '../../components/Nav';

// css
import './index.css';

const AnalogClock = () => {

    const [values,setValues] = useState({
        hours: '00',
        mins: '00',
        secs: '00'
    });

    const {hours,mins,secs} = values;

    useEffect(()=>{
        let clockInterval = setInterval(()=>{
            let currentTime = new Date();
            let currentHours = currentTime.getHours() / 12;
            let currentMins = currentTime.getMinutes() / 60;
            let currentSecs = currentTime.getSeconds() / 60;

            setValues({hours:currentHours,mins:currentMins,secs:currentSecs});
        },1000);

        return () => {
            clearInterval(clockInterval);
        }
    },[]);

    return (
        <>
            <Nav></Nav>
            <section className='container'>
                <div className='row mt-5 text-center'>
                    <div className='h1'>
                        Analog Clock
                    </div>
                </div>
                <div className='clock-container mt-5'>
                    <div className='clock'>

                        {/* clock-numbers */}
                        <div className='number' id='number-one'>
                            <div>1</div>
                        </div>
                        <div className='number' id='number-two'>
                            <div>2</div>
                        </div>
                        <div className='number' id='number-three'>
                            <div>3</div>
                        </div>
                        <div className='number' id='number-four'>
                            <div>4</div>
                        </div>
                        <div className='number' id='number-five'>
                            <div>5</div>
                        </div>
                        <div className='number' id='number-six'>
                            <div>6</div>
                        </div>
                        <div className='number' id='number-seven'>
                            <div>7</div>
                        </div>
                        <div className='number' id='number-eight'>
                            <div>8</div>
                        </div>
                        <div className='number' id='number-nine'>
                            <div>9</div>
                        </div>
                        <div className='number' id='number-ten'>
                            <div>10</div>
                        </div>
                        <div className='number' id='number-eleven'>
                            <div>11</div>
                        </div>
                        <div className='number' id='number-twelve'>
                            <div>12</div>
                        </div>

                        {/* clock-hands */}
                        <div className='hands' id='hour-hand' style={{transform:`rotate(${hours *360}deg)`}}>
                            <div className='hand' id='hour'></div>
                        </div>
                        <div className='hands' id='min-hand' style={{transform:`rotate(${mins *360}deg)`}}>
                            <div className='hand' id='min'></div>
                        </div>
                        <div className='hands' id='sec-hand' style={{transform:`rotate(${secs *360}deg)`}}>
                            <div className='hand' id='sec'></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AnalogClock
