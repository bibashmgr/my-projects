// dependencies
import React from 'react';
import {useState} from 'react';

// icons
import {BsFillArrowRightCircleFill} from 'react-icons/bs';
import {BsFillArrowLeftCircleFill} from 'react-icons/bs';

// css
import './index.css';

// components
import Nav from '../../components/Nav';

// data

const images = [
    {
        id: 1,
        name : 'numbers',
        imgUrl: 'https://images.unsplash.com/photo-1569605803663-e9337d901ff9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
        id: 2,
        name : 'numbers',
        imgUrl: 'https://images.unsplash.com/photo-1561347981-969c80cf4463?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
        id: 3,
        name : 'setup',
        imgUrl: 'https://images.unsplash.com/photo-1544256718-3bcf237f3974?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
        id: 4,
        name : 'simple-setup',
        imgUrl: 'https://images.unsplash.com/photo-1509718443690-d8e2fb3474b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
]

const Carousel = () => {

    const [current, setCurrent] = useState(0);
    const len = images.length;

    const prevSlide = () => {
        if(current === 0) {
            setCurrent(len-1);
        } else {
            setCurrent(current-1);
        }
        // console.log(current);
    }

    const nextSlide = () => {
        if(current === len-1) {
            setCurrent(0);
        } else {
            setCurrent(current+1);
        }
        // console.log(current);
    }

    return (
        <>
            <Nav></Nav>
            <section className='slider-container container'>
                {/* heading */}
                <div className='row mt-5 text-center'>
                    <div className='h1'>
                        Carousel
                    </div>
                </div>
                {/* slider */}
                <div className='row mt-5 slider'>
                    <div className='slides'>
                        {images.map((image) => {
                            return (
                                <div key={image.id} className='img-box'>
                                    <div className={current === (image.id - 1) ? 'inactive active' : 'inactive'}>
                                        <img src={image.imgUrl} alt={image.name} />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    {/* buttons */}
                    <div className='buttons'>
                        <BsFillArrowLeftCircleFill style={{cursor:'pointer'}}  onClick={prevSlide}/>
                        <BsFillArrowRightCircleFill style={{cursor:'pointer'}} onClick={nextSlide} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Carousel
