import React from 'react';

import { 
    SectionInputs as CoreSectionInputs,
    SectionList as CoreSectionList,
} from '../../core/components/sections.jsx';

import {
    GroupInputId,
} from '../../core/components/groups.jsx';

import {
    GroupInputCode,
    GroupInputName,
    GroupInputIsIncoming,
} from './groups.jsx';

import {
    GroupInputFund,
} from '../../related/components/groups.jsx';

import { LABELS as CORE_LABELS } from '../../core/constants.js';

import { NAMESPACE, LABELS } from '../constants.js';

// --- --- --- --- --- --- --- --- ---

export const SectionInputs = ({message, related, data}) => {

    const inputs = [
        GroupInputId,
        GroupInputCode,
        GroupInputName,
        GroupInputIsIncoming,
        GroupInputFund
    ];

    return (
        <CoreSectionInputs
            namespace={NAMESPACE}
            inputs={inputs}
            message={message} 
        />
    )
}

export const SectionList = ({items}) => {

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
        <CoreSectionList
            namespace={NAMESPACE}
            labels={labels} 
            fields={fields} 
            items={items} 
        />
    )
}
