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
    MappedButtonGoHome,
} from '../../core/containers.js';

import {
    MappedDivInputs,
    MappedDivSignupInputs,
    MappedDivSigninInputs,
} from '../containers.js';

import { HOST_ARGS } from '../../root/constants.js';

// --- --- --- --- --- --- --- --- ---

export const UsersForm = ({namespace, mode}) => {

    return (mode === 'CREATE')?(
        <div className='form create'>
            <MappedDivInputs namespace={namespace} />
            <DivCreateMenu namespace={namespace} hostArgs={HOST_ARGS.CREATE_USERS} />
        </div>

    ):(mode === 'RETRIEVE')?(
        <div className='form retrieve'>
            <MappedDivInputs namespace={namespace} />
            <DivRetrieveMenu namespace={namespace} />
        </div>

    ):(mode === 'UPDATE')?(
        <div className='form update'>
            <MappedDivInputs namespace={namespace} />
            <DivUpdateMenu namespace={namespace} />
        </div>

    ):(mode === 'DELETE')?(
        <div className='form delete'>
            <MappedDivInputs namespace={namespace} />
            <DivDeleteMenu namespace={namespace} />
        </div>

    ):(
        <div className='form list'>
            <MappedDivInputs namespace={namespace} />
            <DivFormMenu namespace={namespace} />
        </div>
    );
};

export const SignupForm = ({namespace, onSelectCreate}) => {

    onSelectCreate(namespace);  // To enable create operation

    return (
        <div className='form signup'>
            <MappedDivSignupInputs namespace={namespace} />
            <DivSignupMenu namespace={namespace} hostArgs={HOST_ARGS.SIGNUP} />
        </div>
    );
};

export const SigninForm = ({namespace, onSelectRetrieve}) => {

    onSelectRetrieve(namespace);  // To enable retrieve operation

    return (
        <div className='form signin'>
            <MappedDivSigninInputs namespace={namespace} />
            <DivSigninMenu namespace={namespace} hostArgs={HOST_ARGS.SIGNIN} />
        </div>
    );
};

export const SignoutForm = ({namespace, auth, onSignout}) => {

    if (auth.user && auth.user.id)
        onSignout();

    return (
        <div className='form signout'>
            Επιτυχής αποσύνδεση χρήστη ({(auth.user && auth.user.username)?auth.user.username:''})
            <MappedButtonGoHome namespace={namespace} />
        </div>
    );
};

// --- --- --- --- --- --- --- --- ---
