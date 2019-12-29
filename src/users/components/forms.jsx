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
        <div className='form'>
            <MappedDivInputs namespace={namespace} />
            <DivCreateMenu namespace={namespace} hostArgs={HOST_ARGS.CREATE_USERS} />
        </div>

    ):(mode === 'RETRIEVE')?(
        <div className='form'>
            <MappedDivInputs namespace={namespace} />
            <DivRetrieveMenu namespace={namespace} />
        </div>

    ):(mode === 'UPDATE')?(
        <div className='form'>
            <MappedDivInputs namespace={namespace} />
            <DivUpdateMenu namespace={namespace} />
        </div>

    ):(mode === 'DELETE')?(
        <div className='form'>
            <MappedDivInputs namespace={namespace} />
            <DivDeleteMenu namespace={namespace} />
        </div>

    ):(
        <div className='form'>
            <MappedDivInputs namespace={namespace} />
            <DivFormMenu namespace={namespace} />
        </div>
    );
};

export const SignupForm = ({namespace, onSelectCreate}) => {

    onSelectCreate(namespace);  // To enable create operation

    return (
        <div className='form'>
            <MappedDivSignupInputs namespace={namespace} />
            <DivSignupMenu namespace={namespace} hostArgs={HOST_ARGS.SIGNUP} />
        </div>
    );
};

export const SigninForm = ({namespace, onSelectRetrieve}) => {

    onSelectRetrieve(namespace);  // To enable retrieve operation

    return (
        <div className='form'>
            <MappedDivSigninInputs namespace={namespace} />
            <DivSigninMenu namespace={namespace} hostArgs={HOST_ARGS.SIGNIN} />
        </div>
    );
};

export const SignoutForm = ({namespace, auth, onSignout}) => {

    if (auth.user && auth.user.id)
        onSignout();

    return (
        <div className='form'>
            Επιτυχής αποσύνδεση χρήστη ({(auth.user && auth.user.username)?auth.user.username:''})
            <MappedButtonGoHome namespace={namespace} />
        </div>
    );
};

// --- --- --- --- --- --- --- --- ---
/*
const DivSignupEdit = props => {
    return (
        <div>
            <InputUsername {...props}/>
            <InputPassword {...props}/>
            <InputPassword2 {...props}/>
            <InputEmail {...props}/>
        </div>
    );
};

const ButtonSignup = ({globals, uiux, data, actions}) => {
    return (
        <button
            onClick={() => actions.onVerifyCreate(globals, uiux, data)}
            disabled={!uiux.allowSave}
        >
            {(uiux.isLoading)?(<i className="fa fa-refresh fa-spin"></i>):null}
            Υποβολή
        </button>
    );
};

const DivSignupMenu = props => {
    return (
        <div>
            <ButtonSignup {...props} />
            <ButtonCloseForm {...props} />
        </div>
    );
};

export const SignupForm = props => {
    return (
        <div>
            <DivSignupEdit {...props} />
            <DivSignupMenu {...props} />
        </div>
    );
};

// --- --- --- --- --- --- --- --- ---

const DivSigninEdit = props => {
    return (
        <div>
            <InputUsername {...props}/>
            <InputPassword {...props}/>
        </div>
    );
};

const ButtonSignin = ({globals, uiux, data, actions}) => {
    return (
        <button
            onClick={() => actions.onVerifyRetrieve(globals, uiux, data)}
            disabled={!uiux.allowSave}
        >
            {(uiux.isLoading)?(<i className="fa fa-refresh fa-spin"></i>):null}
            Είσοδος
        </button>
    );
};

const DivSigninMenu = props => {
    return (
        <div>
            <ButtonSignin {...props} />
            <ButtonCloseForm {...props} />
        </div>
    );
};

export const SigninForm = props => {
    return (
        <div>
            <DivSigninEdit {...props}/>
            <DivSigninMenu {...props}/>
        </div>
    );
};

// --- --- --- --- --- --- --- --- ---

export const SignoutForm = props => {
    const globals = props.globals;
    const actions = props.actions;

    if (globals.user && globals.user.id)
        actions.onSignout();

    return (
        <div>
            Επιτυχής αποσύνδεση χρήστη ({(globals.user && globals.user.username)?globals.user.username:''})
            <MappedButtonGoHome {...props} />
        </div>
    );
};
*/