import React, { useState } from 'react';
import './Input.css';

// INPUT: NAME & EMAIL //
const Input = props => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);

    return (
        <div className='Input-block'>
            <div className='Input-block__elem'>
                <h3>Welcome to QuizoMania</h3>
                <p>Please enter you Name and Email-ID to proceed</p>
            </div>
            <form onSubmit={e => e.preventDefault()}>
                <div className='Input-block__elem'>
                    <div className='Input-block--flex'>
                        <input 
                        type='text' 
                        placeholder='Name'
                        onChange={(event) => {
                            setName(event.target.value);
                        }}
                        required
                        />

                        <input 
                        type='email' 
                        placeholder='Email'
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
                        required
                        /> 
                    </div>
                    <button
                    disabled={name === null || email === null ? true : false} 
                    onClick={props.onSumbitDetails.bind(this, name, email)}
                    className='Input-block--btn'>
                        Proceed
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Input;