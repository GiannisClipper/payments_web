import React from 'react';

import { 
    DivInputs as CoreDivInputs,
    DivItems as CoreDivItems
} from '../../core/components/groups.jsx';

import { GroupInputId } from '../../core/components/inputs.jsx';

import {
    MappedInputStringCode,
    MappedInputStringName,
} from '../containers.js';

import { LABELS as CORE_LABELS } from '../../core/constants.js';

import { NAMESPACE, LABELS } from '../constants.js';

// --- --- --- --- --- --- --- --- ---

export const DivInputs = ({message}) => {

    const MappedInputs = [
        GroupInputId,
        MappedInputStringCode,
        MappedInputStringName
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
        LABELS.INPUT_NAME
    ];

    const fields = [
        'id',
        'code',
        'name'
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

