import React from 'react';

import { 
    DivInputs as CoreDivInputs,
    DivItems as CoreDivItems
} from '../../core/components/groups.jsx';

import { GroupInputId } from '../../core/components/inputs.jsx';

import {
    MappedInputStringCode,
    MappedInputStringName,
    MappedInputIsIncoming,
    MappedInputFund,
} from '../containers.js';

import { LABELS as CORE_LABELS } from '../../core/constants.js';

import { NAMESPACE, LABELS } from '../constants.js';

// --- --- --- --- --- --- --- --- ---

export const DivInputs = ({message}) => {

    const MappedInputs = [
        GroupInputId,
        MappedInputStringCode,
        MappedInputStringName,
        MappedInputIsIncoming,
        MappedInputFund,
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
        LABELS.INPUT_CODE,
        LABELS.INPUT_NAME,
        LABELS.INPUT_IS_INCOMING,
        LABELS.INPUT_FUND,
    ];

    const fields = [
        'id',
        'code',
        'name',
        'is_incoming',
        {fund: [
            'id',
            'name'
        ]},
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
