import React from 'react';

import { 
    DivInputs as CoreDivInputs,
    DivItems as CoreDivItems
} from '../../core/components/groups.jsx';

import {
    MappedInputCode,
    MappedInputName,
} from '../../funds/containers.js';

import { LABELS } from '../../funds/constants.js';

// --- --- --- --- --- --- --- --- ---

export const DivInputs = ({namespace, message}) => {

    const MappedInputs = [
        MappedInputCode,
        MappedInputName
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
        LABELS.INPUT_CODE,
        LABELS.INPUT_NAME
    ];

    const fields = [
        'code',
        'name'
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
