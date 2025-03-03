import React from 'react';
import '../User/User.css';
import NavBar from '../../NavBar/NavBar';
import QuestionCard from '../QuestionCard/QuestionCard';

// COMPONENT TO GREET THE USER //
const User = props => {
    return(
        <>
        <NavBar />
        <div className='User-block'>
            <p>Hello, {props.nameReceived}</p>
        </div>
        <QuestionCard />
        </>
    );
};

export default User;