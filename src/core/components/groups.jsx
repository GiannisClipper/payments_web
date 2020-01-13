import React from 'react';

import { LabelInputId } from './inputs.jsx';

import { MappedInputStringId } from '../containers/inputs.js';

import {
    MappedButtonSelectCreate,
    MappedButtonSelectRetrieve,
    MappedButtonSelectUpdate,
    MappedButtonSelectDelete,

    MappedButtonRequestCreate,
    MappedButtonRequestRetrieve,
    MappedButtonRequestUpdate,
    MappedButtonRequestDelete,

    MappedButtonCloseForm,
    MappedButtonCloseMode,
} from '../containers/buttons.js';


// --- --- --- --- --- --- --- --- ---

export const GroupInput = ({name, label, input, message}) => (

    <span className={`group_input group_input_${name}`}>
        {label?label:null}
        {input?input:null}
        {message?message:null}
    </span>
)

export const GroupInputId = ({namespace}) => (

    <GroupInput
        name='id'
        label={<LabelInputId />}
        input={<MappedInputStringId namespace={namespace} />}
        message={null}
    />
)
// --- --- --- --- --- --- --- --- ---

export const GroupFormButtons = props => {
    return (
        <div>
            <MappedButtonSelectCreate {...props} />
            <MappedButtonSelectRetrieve {...props} />
            <MappedButtonCloseForm {...props} />
        </div>
    )
}

export const GroupItemButtons = props => {
    return (
        <div>
            <MappedButtonSelectUpdate {...props} />
            <MappedButtonSelectDelete {...props} />
        </div>
    )
}

export const GroupCreateButtons = props => {
    return (
        <div>
            <MappedButtonRequestCreate {...props} />
            <MappedButtonCloseMode {...props} />
        </div>
    )
}

export const GroupUpdateButtons = props => {
    return (
        <div>
            <MappedButtonRequestUpdate {...props} />
            <MappedButtonCloseMode {...props} />
        </div>
    )
}

export const GroupRetrieveButtons = props => {
    return (
        <div>
            <MappedButtonRequestRetrieve {...props} />
            <MappedButtonCloseMode {...props} />
        </div>
    )
}

export const GroupDeleteButtons = props => {
    return (
        <div>
            <MappedButtonRequestDelete {...props} />
            <MappedButtonCloseMode {...props} />
        </div>
    )
}
