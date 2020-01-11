import React from 'react';

import { 
    LabelInput,
    GroupInput,
} from '../../core/components/inputs.jsx';

import {
    MappedInputStringCode,
    MappedInputStringName,
    MappedMessageInputCode,
    MappedMessageInputName,   
} from '../containers.js';

import { LABELS } from '../constants.js';

// --- --- --- --- --- --- --- --- ---

export const LabelInputCode = () => {
    return (
        <LabelInput value={LABELS.INPUT_CODE} />
    )
}

export const LabelInputName = () => {
    return (
        <LabelInput value={LABELS.INPUT_NAME} />
    )
}

export const GroupInputCode = () => {
    return (
        <GroupInput
            name='code'
            label={<LabelInputCode />}
            input={<MappedInputStringCode />}
            message={<MappedMessageInputCode />}
        />
    )
}

export const GroupInputName = () => {
    return (
        <GroupInput
            name='name'
            label={<LabelInputName />}
            input={<MappedInputStringName />}
            message={<MappedMessageInputName />}
        />
    )
}
