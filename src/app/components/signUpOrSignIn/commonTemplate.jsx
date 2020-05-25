/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { string, func } from 'prop-types'

const CommonTemplate = ({ buttonText, cardHeader, onButtonClick, errorMesssage }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-5 mx-auto mt-5 text-center">
                    <div className="card bg-light">
                        <div className="card-header">{cardHeader}</div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group">
                                        <input type="text" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} className="form-control" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <button className="btn btn-primary" onClick={() => onButtonClick(email, password)}>{buttonText}</button>
                                    {
                                        errorMesssage.length > 0 &&
                                        <div>Found error: {errorMesssage}</div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

CommonTemplate.propTypes = {
    buttonText: string.isRequired,
    cardHeader: string.isRequired,
    onButtonClick: func.isRequired,
    errorMesssage: string.isRequired
}

export default CommonTemplate;