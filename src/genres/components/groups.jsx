import React from 'react';

import { GroupInput } from '../../core/components/groups.jsx';

import {
    LabelInputCode,
    LabelInputName,
    LabelInputIsIncoming,
    LabelInputFund,
} from './inputs.jsx';

import {
    MappedInputStringCode,
    MappedInputStringName,
    MappedInputRadioIsIncoming,
    MappedInputStringFund,
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

export const GroupInputFund = () => (

    <GroupInput
        name='fund'
        label={<LabelInputFund />}
        input={<MappedInputStringFund />}
        message={null}
    />
)
