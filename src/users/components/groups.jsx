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

import { LABELS } from '../constants.js';

// --- --- --- --- --- --- --- --- ---

export const DivInputs = ({errors, namespace}) => {
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

export const DivSignupInputs = ({errors, namespace}) => {
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

export const DivSigninInputs = ({errors, namespace}) => {
    const props = {namespace};

    return (
        <div className='edit'>
            <span className='message'>{errors?errors:''}</span>
            <MappedInputUsername {...props}/>
            <MappedInputPassword {...props}/>
        </div>
    );
};
