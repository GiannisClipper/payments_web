import React from 'react';

import { 
    DivInputs as CoreDivInputs,
    DivItems as CoreDivItems
} from '../../core/components/groups.jsx';

import { MappedInputId } from '../../core/containers.js';

import {
    MappedInputUsername,
    MappedInputPassword,
    MappedInputPassword2,
    MappedInputEmail,
} from '../containers.js';

import { LABELS as CORE_LABELS } from '../../core/constants.js';

import { NAMESPACE, LABELS } from '../constants.js';

// --- --- --- --- --- --- --- --- ---

export const DivInputs = ({message}) => {

    const MappedInputs = [
        MappedInputId,
        MappedInputUsername,
        MappedInputPassword,
        MappedInputPassword2,
        MappedInputEmail,
    ];

    return (
        <CoreDivInputs 
            namespace={NAMESPACE}
            MappedInputs={MappedInputs}
            message={message} 
        />
    )
}

export const DivItems = ({items}) => {

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
        <CoreDivItems
            namespace={NAMESPACE}
            labels={labels} 
            fields={fields} 
            items={items} 
        />
    )
}
