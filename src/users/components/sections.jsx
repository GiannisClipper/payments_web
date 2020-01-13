import React from 'react';

import { 
    SectionInputs as CoreSectionInputs,
    SectionList as CoreSectionList,
} from '../../core/components/sections.jsx';

import {
    GroupInputId,
} from '../../core/components/groups.jsx';

import {
    GroupInputUsername,
    GroupInputPassword,
    GroupInputPassword2,
    GroupInputEmail,
} from './groups.jsx';

import { LABELS as CORE_LABELS } from '../../core/constants.js';

import { NAMESPACE, LABELS } from '../constants.js';

// --- --- --- --- --- --- --- --- ---

export const SectionInputs = ({message}) => {

    const inputs = [
        GroupInputId,
        GroupInputUsername,
        GroupInputPassword,
        GroupInputPassword2,
        GroupInputEmail,
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
        <CoreSectionList
            namespace={NAMESPACE}
            labels={labels} 
            fields={fields} 
            items={items} 
        />
    )
}
