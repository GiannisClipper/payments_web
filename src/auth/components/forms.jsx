import React from 'react';

import {
    DivSignupMenu,
    DivSigninMenu,
} from './menus.jsx';

import {
    MappedDivSignupInputs,
    MappedDivSigninInputs,
} from '../containers.js';

import { LABELS } from '../constants.js';

import { HOST_ARGS } from '../../root/constants.js';

// --- --- --- --- --- --- --- --- ---

export const SignupForm = ({namespace, onSelectCreate}) => {

    onSelectCreate(namespace);  // To enable create operation

    return (
        <div className='form signup'>
            <div className='title'>{LABELS.FORM_SIGNUP_TITLE}</div>
            <MappedDivSignupInputs namespace={namespace} />
            <DivSignupMenu namespace={namespace} hostArgs={HOST_ARGS.SIGNUP} />
        </div>
    )
}

export const SigninForm = ({namespace, onSelectRetrieve}) => {

    onSelectRetrieve(namespace);  // To enable retrieve operation
    console.log(namespace);
    return (
        <div className='form signin'>
            <div className='title'>{LABELS.FORM_SIGNIN_TITLE}</div>
            <MappedDivSigninInputs namespace={namespace} />
            <DivSigninMenu namespace={namespace} hostArgs={HOST_ARGS.SIGNIN} />
        </div>
    )
}

export const SignoutForm = ({namespace, auth, onSignout}) => {

    const message = `Αποσύνδεση χρήστη (${auth.user.username})`;

    onSignout(namespace, message);

    return (<></>);
}

// --- --- --- --- --- --- --- --- ---
