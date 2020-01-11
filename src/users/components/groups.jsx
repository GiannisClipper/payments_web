import React from 'react';

import { 
    GroupInputs as CoreGroupInputs,
    GroupItems as CoreGroupItems,
} from '../../core/components/groups.jsx';

import { GroupInputId } from '../../core/components/inputs.jsx';

import {
    GroupInputUsername,
    GroupInputPassword,
    GroupInputPassword2,
    GroupInputEmail,
} from './inputs.jsx';

import { LABELS as CORE_LABELS } from '../../core/constants.js';

import { NAMESPACE, LABELS } from '../constants.js';

// --- --- --- --- --- --- --- --- ---

export const GroupInputs = ({message}) => {

    const inputs = [
        GroupInputId,
        GroupInputUsername,
        GroupInputPassword,
        GroupInputPassword2,
        GroupInputEmail,
    ];

    return (
        <CoreGroupInputs 
            namespace={NAMESPACE}
            inputs={inputs}
            message={message} 
        />
    )
}

export const GroupItems = ({items}) => {

    const labels = [
        CORE_LABELS.INPUT_ID,
        LABELS.INPUT_USERNAME,
        LABELS.INPUT_PASSWORD,
        LABELS.INPUT_PASSWORD2,
        LABELS.INPUT_EMAIL
    ];

    const fields = [
        'id',
        'username',
        'password',
        'password2',
        'email'
    ];

    return (
        <CoreGroupItems
            namespace={NAMESPACE}
            labels={labels} 
            fields={fields} 
            items={items} 
        />
    )
}
