import React from 'react';

import { GroupInput } from '../../core/components/groups.jsx';

import {
    LabelInputCode,
    LabelInputName,
    LabelInputIsIncoming,
} from './inputs.jsx';

import {
    MappedInputStringCode,
    MappedInputStringName,
    MappedInputRadioIsIncoming,
    MappedMessageInputCode,
    MappedMessageInputName,
} from '../containers/inputs.js';

// --- --- --- --- --- --- --- --- ---

export const GroupInputCode = () => (

    <GroupInput
        name='code'
        label={<LabelInputCode />}
        input={<MappedInputStringCode />}
        message={<MappedMessageInputCode />}
    />
)

export const GroupInputName = () => (

    <GroupInput
        name='name'
        label={<LabelInputName />}
        input={<MappedInputStringName />}
        message={<MappedMessageInputName />}
    />
)

export const GroupInputIsIncoming = () => (

    <GroupInput
        name='is_incoming'
        label={<LabelInputIsIncoming />}
        input={<MappedInputRadioIsIncoming />}
        message={null}
    />
)

