/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import CommonTemplate from './commonTemplate';
import fire from '../../../firebase';
// import History from '../../../history';

const SignIn = () =>{
    const [error, setError] = useState('');
    useEffect(() => {

    }, [error]);

    const onSignInButtonClick = (email, password) => {
        fire.auth().signInWithEmailAndPassword(email, password).then((user) =>{
            console.log('user---------', user);
        }).catch((error) => setError(error.message));
    }
    return (
        <CommonTemplate buttonText="Sign In" cardHeader="Sign In" onButtonClick={onSignInButtonClick} errorMesssage={error}/>
    );
}
    

export default SignIn;