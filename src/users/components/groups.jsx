import React from 'react';

import { GroupInput } from '../../core/components/groups.jsx';

import {
    LabelInputUsername,
    LabelInputPassword,
    LabelInputPassword2,
    LabelInputEmail,
} from './inputs.jsx';

import {
    MappedInputStringUsername,
    MappedInputHiddenPassword,
    MappedInputHiddenPassword2,
    MappedInputStringEmail,
    MappedMessageInputUsername,
    MappedMessageInputPassword,
    MappedMessageInputPassword2,
    MappedMessageInputEmail,
} from '../containers/inputs.js';

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
