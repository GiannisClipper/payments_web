import React from 'react';

import { Form } from '../../core/components/forms.jsx';

import {
    GroupSignupButtons,
    GroupSigninButtons,
} from './groups.jsx';

import {
    MappedSignupSectionInputs,
    MappedSigninSectionInputs,
} from '../containers/sections.js';

import { LABELS, HOST_ARGS } from '../../root/constants.js';

import { NAMESPACE } from '../../users/constants.js';

// --- --- --- --- --- --- --- --- ---

export const FormSignup = ({onSelectCreate}) => {

    onSelectCreate(NAMESPACE);  // To enable create operation

    return (
        <Form
            namespace={NAMESPACE}
            title={LABELS.MENU_SIGNUP}
            mode={null}
            hostArgs={HOST_ARGS.SIGNUP}
    
            SectionData={MappedSignupSectionInputs}
            SectionButtons={GroupSignupButtons}
        />
    )
}

export const FormSignin = ({onSelectRetrieve}) => {

    onSelectRetrieve(NAMESPACE);  // To enable retrieve operation

    return (
        <Form
            namespace={NAMESPACE}
            title={LABELS.MENU_SIGNIN}
            mode={null}
            hostArgs={HOST_ARGS.SIGNIN}
    
            SectionData={MappedSigninSectionInputs}
            SectionButtons={GroupSigninButtons}
        />
    )
}

export const FormSignout = ({auth, onSignout}) => {

    const message = `Αποσύνδεση χρήστη (${auth.user.username})`;

    onSignout(NAMESPACE, message);

    return (<></>);
}
