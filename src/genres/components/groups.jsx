import React from 'react';

import { 
    DivInputs as CoreDivInputs,
    DivItems as CoreDivItems
} from '../../core/components/groups.jsx';

import { MappedInputId } from '../../core/containers.js';

import {
    MappedInputCode,
    MappedInputName,
    MappedInputIsIncoming,
} from '../containers.js';

import { LABELS as CORE_LABELS } from '../../core/constants.js';

import { LABELS } from '../constants.js';

// --- --- --- --- --- --- --- --- ---

export const DivInputs = ({namespace, message}) => {

    const MappedInputs = [
        MappedInputId,
        MappedInputCode,
        MappedInputName,
        MappedInputIsIncoming,
    ];

    return (
        <CoreDivInputs 
            namespace={namespace}
            MappedInputs={MappedInputs}
            message={message} 
        />
    )
}

export const DivItems = ({namespace, items}) => {

    const labels = [
        CORE_LABELS.INPUT_ID,
        LABELS.INPUT_CODE,
        LABELS.INPUT_NAME,
        LABELS.INPUT_IS_INCOME
    ];

    const fields = [
        'id',
        'code',
        'name',
        'is_incoming'
    ];

    return (
        <CoreDivItems
            namespace={namespace}
            labels={labels} 
            fields={fields} 
            items={items} 
        />
    )
}
