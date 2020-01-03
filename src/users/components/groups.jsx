import React from 'react';

import {
    MappedInputId,
} from '../../core/containers.js';

import {
    MappedInputUsername,
    MappedInputPassword,
    MappedInputPassword2,
    MappedInputEmail,
} from '../containers.js';

// --- --- --- --- --- --- --- --- ---

export const DivInputs = ({namespace, errors}) => {
    const props = {namespace};

    return (
        <div className='edit'>
            <span className='message'>{errors?errors:''}</span>
            <MappedInputId {...props} />
            <MappedInputUsername {...props}/>
            <MappedInputPassword {...props}/>
            <MappedInputPassword2 {...props}/>
            <MappedInputEmail {...props}/>
        </div>
    );
};

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
    );
};

export const DivSigninInputs = ({namespace, errors}) => {
    const props = {namespace};

    return (
        <div className='edit'>
            <span className='message'>{errors?errors:''}</span>
            <MappedInputUsername {...props}/>
            <MappedInputPassword {...props}/>
        </div>
    );
};
