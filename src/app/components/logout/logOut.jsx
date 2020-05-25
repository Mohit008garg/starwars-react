/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import fire from '../../../firebase';
const LogOut = () => {

    useEffect(() => {
        fire.auth().signOut();
    }, []);
    return (
        <div>You are logged out, please logged in again</div>
    );
}

export default LogOut;