import React from 'react';

import {
    DivSignupMenu,
    DivSigninMenu,
} from './menus.jsx';

import {
    MappedDivSignupInputs,
    MappedDivSigninInputs,
} from '../containers.js';

import { LABELS, HOST_ARGS } from '../../root/constants.js';

import { NAMESPACE } from '../../users/constants.js';

// --- --- --- --- --- --- --- --- ---

export const SignupForm = ({onSelectCreate}) => {

    onSelectCreate(NAMESPACE);  // To enable create operation

    return (
        <div className='form signup'>
            <div className='title'>{LABELS.MENU_SIGNUP}</div>
            <MappedDivSignupInputs />
            <DivSignupMenu hostArgs={HOST_ARGS.SIGNUP} />
        </div>
    )
}

export const SigninForm = ({onSelectRetrieve}) => {

    onSelectRetrieve(NAMESPACE);  // To enable retrieve operation

    return (
        <div className='form signin'>
            <div className='title'>{LABELS.MENU_SIGNIN}</div>
            <MappedDivSigninInputs />
            <DivSigninMenu hostArgs={HOST_ARGS.SIGNIN} />
        </div>
    )
}

export const SignoutForm = ({auth, onSignout}) => {

    const message = `Αποσύνδεση χρήστη (${auth.user.username})`;

    onSignout(NAMESPACE, message);

    return (<></>);
}

// --- --- --- --- --- --- --- --- ---
