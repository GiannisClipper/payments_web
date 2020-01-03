import React from 'react';

import {
    MappedInputUsername,
    MappedInputPassword,
    MappedInputPassword2,
    MappedInputEmail,
} from '../../users/containers.js';

// --- --- --- --- --- --- --- --- ---

export const DivSignupInputs = ({namespace, errors}) => {
    const props = {namespace};

    return (
        <div className='edit'>
            <span className='message'>{errors?errors:''}</span>
            <MappedInputUsername {...props}/>
            <MappedInputPassword {...props}/>
            <MappedInputPassword2 {...props}/>
            <MappedInputEmail {...props}/>
        </div>
    )
}

export const DivSigninInputs = ({namespace, errors}) => {
    const props = {namespace};

    return (
        <div className='edit'>
            <span className='message'>{errors?errors:''}</span>
            <MappedInputUsername {...props}/>
            <MappedInputPassword {...props}/>
        </div>
    )
}
