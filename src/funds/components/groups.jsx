import React from 'react';

import { 
    GroupInputs as CoreGroupInputs,
    GroupItems as CoreGroupItems,
} from '../../core/components/groups.jsx';

import { GroupInputId } from '../../core/components/inputs.jsx';

import {
    GroupInputCode,
    GroupInputName,
} from './inputs.jsx';

import { LABELS as CORE_LABELS } from '../../core/constants.js';

import { NAMESPACE, LABELS } from '../constants.js';

// --- --- --- --- --- --- --- --- ---

export const GroupInputs = ({message}) => {

    const inputs = [
        GroupInputId,
        GroupInputCode,
        GroupInputName
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
        LABELS.INPUT_CODE,
        LABELS.INPUT_NAME
    ];

    const fields = [
        'id',
        'code',
        'name'
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

