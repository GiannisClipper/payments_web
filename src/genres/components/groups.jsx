import React from 'react';

import { 
    GroupInputs as CoreGroupInputs,
    GroupItems as CoreGroupItems,
} from '../../core/components/groups.jsx';

import { GroupInputId } from '../../core/components/inputs.jsx';

import {
    GroupInputCode,
    GroupInputName,
    GroupInputIsIncoming,
    GroupInputFund,
} from './inputs.jsx';

import { MappedButtonRequestFund,
         MappedRelatedFundList,
} from '../containers.js';

import { LABELS as CORE_LABELS } from '../../core/constants.js';

import { NAMESPACE, LABELS } from '../constants.js';

// --- --- --- --- --- --- --- --- ---

export const GroupInputs = ({message, relatedNamespace}) => {

    const inputs = [
        GroupInputId,
        GroupInputCode,
        GroupInputName,
        GroupInputIsIncoming,
        GroupInputFund,
        MappedButtonRequestFund,
    ];

    if (relatedNamespace)
        inputs.push(MappedRelatedFundList);

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
        <CoreGroupItems
            namespace={NAMESPACE}
            labels={labels} 
            fields={fields} 
            items={items} 
        />
    )
}
