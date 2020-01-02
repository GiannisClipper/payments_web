import React from 'react';

import {
    DivFormMenu,
    DivCreateMenu,
    DivRetrieveMenu,
    DivUpdateMenu,
    DivDeleteMenu,
} from '../../core/components/menus.jsx';

import {
    DivSignupMenu,
    DivSigninMenu,
} from './menus.jsx';

import {
    MappedDivInputs,
    MappedDivSignupInputs,
    MappedDivSigninInputs,
} from '../containers.js';

import { LABELS } from '../constants.js';

import { HOST_ARGS } from '../../root/constants.js';

// --- --- --- --- --- --- --- --- ---

export const UsersForm = ({namespace, mode}) => {

    return (mode === 'CREATE')?(
        <div className='form users create'>
            <div className='title'>{LABELS.FORM_USERS_TITLE}</div>
            <MappedDivInputs namespace={namespace} />
            <DivCreateMenu namespace={namespace} hostArgs={HOST_ARGS.CREATE_USERS} />
        </div>

    ):(mode === 'RETRIEVE')?(
        <div className='form users retrieve'>
            <div className='title'>{LABELS.FORM_USERS_TITLE}</div>
            <MappedDivInputs namespace={namespace} />
            <DivRetrieveMenu namespace={namespace} />
        </div>

    ):(mode === 'UPDATE')?(
        <div className='form users update'>
            <div className='title'>{LABELS.FORM_USERS_TITLE}</div>
            <MappedDivInputs namespace={namespace} />
            <DivUpdateMenu namespace={namespace} />
        </div>

    ):(mode === 'DELETE')?(
        <div className='form users delete'>
            <div className='title'>{LABELS.FORM_USERS_TITLE}</div>
            <MappedDivInputs namespace={namespace} />
            <DivDeleteMenu namespace={namespace} />
        </div>

    ):(
        <div className='form users list'>
            <div className='title'>{LABELS.FORM_USERS_TITLE}</div>
            <MappedDivInputs namespace={namespace} />
            <DivFormMenu namespace={namespace} />
        </div>
    );
};

export const SignupForm = ({namespace, onSelectCreate}) => {

    onSelectCreate(namespace);  // To enable create operation

    return (
        <div className='form signup'>
            <div className='title'>{LABELS.FORM_SIGNUP_TITLE}</div>
            <MappedDivSignupInputs namespace={namespace} />
            <DivSignupMenu namespace={namespace} hostArgs={HOST_ARGS.SIGNUP} />
        </div>
    );
};

export const SigninForm = ({namespace, onSelectRetrieve}) => {

    onSelectRetrieve(namespace);  // To enable retrieve operation

    return (
        <div className='form signin'>
            <div className='title'>{LABELS.FORM_SIGNIN_TITLE}</div>
            <MappedDivSigninInputs namespace={namespace} />
            <DivSigninMenu namespace={namespace} hostArgs={HOST_ARGS.SIGNIN} />
        </div>
    );
};

export const SignoutForm = ({namespace, auth, onSignout}) => {

    const message = `Αποσύνδεση χρήστη (${auth.user.username})`;

    onSignout(namespace, message);

    return (<></>);
};

// --- --- --- --- --- --- --- --- ---
