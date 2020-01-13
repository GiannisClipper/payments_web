import React from 'react';

import { 
    LabelInput,
    GroupInput,
} from '../../core/components/inputs.jsx';

import {
    MappedInputStringCode,
    MappedInputStringName,
    MappedInputRadioIsIncoming,
    MappedInputStringFund,
    MappedMessageInputCode,
    MappedMessageInputName,
} from '../containers.js';

import { LABELS } from '../constants.js';

// --- --- --- --- --- --- --- --- ---

export const LabelInputCode = () => (<LabelInput value={LABELS.INPUT_CODE} />)

export const LabelInputName = () => (<LabelInput value={LABELS.INPUT_NAME} />)

export const LabelInputIsIncoming = () => (<LabelInput value={LABELS.INPUT_IS_INCOMING} />)

export const LabelInputFund = () => (<LabelInput value={LABELS.INPUT_FUND} />)

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
