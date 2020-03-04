import React from 'react';

import { 
    SectionInputs as CoreSectionInputs,
    SectionList as CoreSectionList,
} from '../../core/components/sections.jsx';

import {
    GroupInputId,
} from '../../core/components/groups.jsx';

import {
    GroupInputDate,
    GroupInputIncoming,
    GroupInputOutgoing,
    GroupInputRemarks,
} from './groups.jsx';

import {
    GroupInputFund,
    GroupInputGenre,
} from '../../related/components/groups.jsx';

import { LABELS as CORE_LABELS } from '../../core/constants.js';

import { NAMESPACE, LABELS } from '../constants.js';

// --- --- --- --- --- --- --- --- ---

export const SectionInputs = ({message, related, data}) => {

    const inputs = [
        GroupInputId,
        GroupInputDate,
        GroupInputGenre,
        GroupInputIncoming,
        GroupInputOutgoing,
        GroupInputRemarks,
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
        LABELS.INPUT_DATE,
        LABELS.INPUT_GENRE,
        LABELS.INPUT_INCOMING,
        LABELS.INPUT_OUTGOING,
        LABELS.INPUT_REMARKS,
        LABELS.INPUT_FUND,
    ];

    const fields = [
        'id',
        'date',
        {genre: [
            'id',
            'name'
        ]},
        'incoming',
        'outgoing',
        'remarks',
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
