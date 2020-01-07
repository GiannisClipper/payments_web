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
    MappedInputFund,
    MappedButtonSelectRetrieveFund,
} from '../containers.js';

import { LABELS as CORE_LABELS } from '../../core/constants.js';

import { NAMESPACE, LABELS } from '../constants.js';

import { LABELS as FUND_LABELS } from '../../funds/constants.js';

// --- --- --- --- --- --- --- --- ---

export const DivInputs = ({message}) => {

    const MappedInputs = [
        MappedInputId,
        MappedInputCode,
        MappedInputName,
        MappedInputIsIncoming,
        MappedInputFund,
        MappedButtonSelectRetrieveFund,
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
        FUND_LABELS.INPUT_FUND,
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
