import React from 'react';

import { InputValue } from '../../core/components/inputs.jsx';

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

export const LabelInputUsername = () => {
    return (
        <LabelInput value={LABELS.INPUT_USERNAME} />
    )
}

export const LabelInputPassword = () => {
    return (
        <LabelInput value={LABELS.INPUT_PASSWORD} />
    )
}

export const LabelInputPassword2 = () => {
    return (
        <LabelInput value={LABELS.INPUT_PASSWORD2} />
    )
}

export const LabelInputEmail = () => {
    return (
        <LabelInput value={LABELS.INPUT_EMAIL} />
    )
}

export const GroupInputUsername = () => {
    return (
        <GroupInput
            name='username'
            label={<LabelInputUsername />}
            input={<MappedInputStringUsername />}
            message={<MappedMessageInputUsername />}
        />
    )
}

export const GroupInputPassword = () => {
    return (
        <GroupInput
            name='password'
            label={<LabelInputPassword />}
            input={<MappedInputHiddenPassword />}
            message={<MappedMessageInputPassword />}
        />
    )
}

export const GroupInputPassword2 = () => {
    return (
        <GroupInput
            name='password2'
            label={<LabelInputPassword2 />}
            input={<MappedInputHiddenPassword2 />}
            message={<MappedMessageInputPassword2 />}
        />
    )
}
export const GroupInputEmail = () => {
    return (
        <GroupInput
            name='email'
            label={<LabelInputEmail />}
            input={<MappedInputStringEmail />}
            message={<MappedMessageInputEmail />}
        />
    )
}

// --- --- --- --- --- --- --- --- ---


export const InputUsername = ({value, message, allowEdit, onChange}) => {
    return (
        <InputValue 
            name = 'username'
            label = {LABELS.INPUT_USERNAME}
            value = {value}
            message = {message}
            allowEdit = {allowEdit}
            onChange = {onChange}
        />
    )
}

export const InputPassword = ({value, message, allowEdit, onChange}) => {
    return (
        <InputValue 
            type = 'password'
            name = 'password'
            label = {LABELS.INPUT_PASSWORD}
            value = {value}
            message = {message}
            allowEdit = {allowEdit}
            onChange = {onChange}
        />
    )
}

export const InputPassword2 = ({value, message, allowEdit, onChange}) => {
    return (
        <InputValue 
            type = 'password'
            name = 'password2'
            label = {LABELS.INPUT_PASSWORD2}
            value = {value}
            message = {message}
            allowEdit = {allowEdit}
            onChange = {onChange}
        />
    )
}

export const InputEmail = ({value, message, allowEdit, onChange}) => {
    return (
        <InputValue 
            name = 'email'
            label = {LABELS.INPUT_EMAIL}
            value = {value}
            message = {message}
            allowEdit = {allowEdit}
            onChange = {onChange}
        />
    )
}

// --- --- --- --- --- --- --- --- ---
