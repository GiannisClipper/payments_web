import React from 'react';

import { GroupInput } from '../../core/components/groups.jsx';

import {
    LabelInputDate,
    LabelInputIncoming,
    LabelInputOutgoing,
    LabelInputRemarks,
} from './inputs.jsx';

import {
    MappedInputDateDate,
    MappedInputNumberIncoming,
    MappedInputNumberOutgoing,
    MappedInputStringRemarks,
    MappedMessageInputDate,
} from '../containers/inputs.js';

// --- --- --- --- --- --- --- --- ---

export const GroupInputDate = () => (

    <GroupInput
        name='date'
        label={<LabelInputDate />}
        input={<MappedInputDateDate />}
        message={<MappedMessageInputDate />}
    />
)

export const GroupInputIncoming = () => (

    <GroupInput
        name='incoming'
        label={<LabelInputIncoming />}
        input={<MappedInputNumberIncoming />}
        message={null}
    />
)

export const GroupInputOutgoing = () => (

    <GroupInput
        name='outgoing'
        label={<LabelInputOutgoing />}
        input={<MappedInputNumberOutgoing />}
        message={null}
    />
)

export const GroupInputRemarks = () => (

    <GroupInput
        name='remarks'
        label={<LabelInputRemarks />}
        input={<MappedInputStringRemarks />}
        message={null}
    />
)
