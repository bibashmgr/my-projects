// dependencies
import React from 'react';
import { useState } from 'react';

// components
import Nav from '../../components/Nav';

// css
import './index.css';

const Counter = () => {

    const [values, setValues] = useState({
        username:'',
        email:'',
        password1:'',
        password2:''
    });

    const [error, setError] = useState({})

    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues({...values, [name]:value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let errors = {}

        if(values.username === ''){
            errors.username = 'Username is required';
        }
        if(values.email === ''){
            errors.email = 'Email is required';
        } else if(!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = 'Email is invalid';
        }

        if(values.password1 === ''){
            errors.password1 = 'Password is required';
        } else if(values.password1.length < 6){
            errors.password1 = 'Password must be at least 6 characters long';
        }

        if(values.password2 === ''){
            errors.password2 = 'Confirm Password is required';
        } else if(values.password1 !== values.password2){
            errors.password2 = 'Password doesnot match';
        }

        setError(errors);

        if(Object.entries(errors).length === 0){
            console.log('Successfully login');
            setValues(
                {
                    username:'',
                    email:'',
                    password1:'',
                    password2:''
                }
            );
        }
    }

    return (
        <>
            <Nav></Nav>
            <section className='container mt-5'>
                <div className='mt-5 text-center'>
                    <div className='h1'>
                        Form
                    </div>
                </div>
                <div className='mt-5 d-flex justify-content-center'>
                    <form className='form' onSubmit={handleSubmit}>
                        <div className="mb-3 row">
                            <label htmlFor='username' className="col-form-label text-capitalize">Username:</label>
                            <div className="col">
                                <input type='text' className="form-control text-start" id='username' name='username' value={values.username} onChange={handleChange} />
                            </div>
                            <small className='text-danger mt-1'>{error.username}</small>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor='email' className="col-form-label text-capitalize">Email:</label>
                            <div className="col">
                                <input type='text' className="form-control text-start" id='email' name='email' value={values.email} onChange={handleChange} />
                            </div>
                            <small className='text-danger mt-1'>{error.email}</small>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor='password1' className="col-form-label text-capitalize">Password:</label>
                            <div className="col">
                                <input type='password' className="form-control text-start" id='password1' name='password1' value={values.password1} onChange={handleChange} />
                            </div>
                            <small className='text-danger mt-1'>{error.password1}</small>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor='password2' className="col-form-label text-capitalize">Password:</label>
                            <div className="col">
                                <input type='password' className="form-control text-start" id='password2' name='password2' value={values.password2} onChange={handleChange} />
                            </div>
                            <small className='text-danger mt-1'>{error.password2}</small>
                        </div>
                        <div>
                            <input type="submit" value='Create Account' className='btn btn-primary' />
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Counter
