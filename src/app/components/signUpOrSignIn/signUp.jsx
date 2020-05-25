/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import CommonTemplate from './commonTemplate';
import fire from '../../../firebase';


const SignUp = () => {
    const [error, setError] = useState('');
    useEffect(() => {

    }, [error]);

    const onSignUpButtonClick = (email, password) => {
        fire.auth().createUserWithEmailAndPassword(email, password).then((user) =>
            console.log('user---------', user)).catch((error) => setError(error.message));
    }
    return (
        <CommonTemplate buttonText="Sign Up" cardHeader="Sign Up" onButtonClick={onSignUpButtonClick} errorMesssage={error} />
    );
}


export default SignUp;