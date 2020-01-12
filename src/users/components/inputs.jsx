import React from 'react';

import { LABELS } from '../constants.js';

import { 
    LabelInput,
    GroupInput,
} from '../../core/components/inputs.jsx';

import {
    MappedInputStringUsername,
    MappedInputHiddenPassword,
    MappedInputHiddenPassword2,
    MappedInputStringEmail,
    MappedMessageInputUsername,
    MappedMessageInputPassword,
    MappedMessageInputPassword2,
    MappedMessageInputEmail,
} from '../containers.js';

// --- --- --- --- --- --- --- --- ---

export const LabelInputUsername = () => (<LabelInput value={LABELS.INPUT_USERNAME} />)

export const LabelInputPassword = () => (<LabelInput value={LABELS.INPUT_PASSWORD} />)

export const LabelInputPassword2 = () => (<LabelInput value={LABELS.INPUT_PASSWORD2} />)

export const LabelInputEmail = () => (<LabelInput value={LABELS.INPUT_EMAIL} />)

// --- --- --- --- --- --- --- --- ---

export const GroupInputUsername = () => (

    <GroupInput
        name='username'
        label={<LabelInputUsername />}
        input={<MappedInputStringUsername />}
        message={<MappedMessageInputUsername />}
    />
)

export const GroupInputPassword = () => (

    <GroupInput
        name='password'
        label={<LabelInputPassword />}
        input={<MappedInputHiddenPassword />}
        message={<MappedMessageInputPassword />}
    />
)

export const GroupInputPassword2 = () => (

    <GroupInput
        name='password2'
        label={<LabelInputPassword2 />}
        input={<MappedInputHiddenPassword2 />}
        message={<MappedMessageInputPassword2 />}
    />
)

export const GroupInputEmail = () => (

    <GroupInput
        name='email'
        label={<LabelInputEmail />}
        input={<MappedInputStringEmail />}
        message={<MappedMessageInputEmail />}
    />
)
