import React from 'react';

import { Form } from '../../core/components/forms.jsx';

import {
    GroupSignupButtons,
    GroupSigninButtons,
} from './buttons.jsx';

import {
    MappedGroupSignupInputs,
    MappedGroupSigninInputs,
} from '../containers.js';

import { LABELS, HOST_ARGS } from '../../root/constants.js';

import { NAMESPACE } from '../../users/constants.js';

// --- --- --- --- --- --- --- --- ---

export const SignupForm = ({onSelectCreate}) => {

    onSelectCreate(NAMESPACE);  // To enable create operation

    return (
        <Form
            namespace={NAMESPACE}
            title={LABELS.MENU_SIGNUP}
            mode={null}
            hostArgs={HOST_ARGS.SIGNUP}
    
            GroupInputs={MappedGroupSignupInputs}
            GroupButtons={GroupSignupButtons}
        />
    )
}

export const SigninForm = ({onSelectRetrieve}) => {

    onSelectRetrieve(NAMESPACE);  // To enable retrieve operation

    return (
        <Form
            namespace={NAMESPACE}
            title={LABELS.MENU_SIGNIN}
            mode={null}
            hostArgs={HOST_ARGS.SIGNIN}
    
            GroupInputs={MappedGroupSigninInputs}
            GroupButtons={GroupSigninButtons}
        />
    )
}

export const SignoutForm = ({auth, onSignout}) => {

    const message = `Αποσύνδεση χρήστη (${auth.user.username})`;

    onSignout(NAMESPACE, message);

    return (<></>);
}

// --- --- --- --- --- --- --- --- ---
