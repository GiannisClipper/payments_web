import React from 'react';

import { GroupInputs } from '../../core/components/groups.jsx';

import {
    GroupInputUsername,
    GroupInputPassword,
    GroupInputPassword2,
    GroupInputEmail,
} from '../../users/components/inputs.jsx';

import { NAMESPACE } from '../../users/constants.js';

// --- --- --- --- --- --- --- --- ---

export const GroupSignupInputs = ({message}) => {

    const inputs = [
        GroupInputUsername,
        GroupInputPassword,
        GroupInputPassword2,
        GroupInputEmail,
    ];

    return (
        <GroupInputs 
            namespace={NAMESPACE}
            inputs={inputs}
            message={message} 
        />
    )
}

export const GroupSigninInputs = ({message}) => {

    const inputs = [
        GroupInputUsername,
        GroupInputPassword,
    ];

    return (
        <GroupInputs 
            namespace={NAMESPACE}
            inputs={inputs}
            message={message} 
        />
    )
}
