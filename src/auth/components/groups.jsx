import React from 'react';

import {
    MappedInputUsername,
    MappedInputPassword,
    MappedInputPassword2,
    MappedInputEmail,
} from '../../users/containers.js';

// --- --- --- --- --- --- --- --- ---

export const DivSignupInputs = ({errors}) => {

    return (
        <div className='edit'>
            <span className='message'>{errors?errors:''}</span>
            <MappedInputUsername />
            <MappedInputPassword />
            <MappedInputPassword2 />
            <MappedInputEmail />
        </div>
    )
}

export const DivSigninInputs = ({namespace, errors}) => {

    return (
        <div className='edit'>
            <span className='message'>{errors?errors:''}</span>
            <MappedInputUsername />
            <MappedInputPassword />
        </div>
    )
}
