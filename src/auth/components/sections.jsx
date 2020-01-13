import React from 'react';

import { SectionInputs } from '../../core/components/sections.jsx';

import {
    GroupInputUsername,
    GroupInputPassword,
    GroupInputPassword2,
    GroupInputEmail,
} from '../../users/components/groups.jsx';

import { NAMESPACE } from '../../users/constants.js';

// --- --- --- --- --- --- --- --- ---

export const SignupSectionInputs = ({message}) => {

    const inputs = [
        GroupInputUsername,
        GroupInputPassword,
        GroupInputPassword2,
        GroupInputEmail,
    ];

    return (
        <SectionInputs 
            namespace={NAMESPACE}
            inputs={inputs}
            message={message} 
        />
    )
}

export const SigninSectionInputs = ({message}) => {

    const inputs = [
        GroupInputUsername,
        GroupInputPassword,
    ];

    return (
        <SectionInputs
            namespace={NAMESPACE}
            inputs={inputs}
            message={message} 
        />
    )
}
