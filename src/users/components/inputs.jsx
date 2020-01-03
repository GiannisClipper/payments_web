import React from 'react';

import { InputString } from '../../core/components/inputs.jsx';

import { LABELS } from '../constants.js';

// --- --- --- --- --- --- --- --- ---

export const InputUsername = ({value, message, allowEdit, onChange}) => {
    return (
        <InputString 
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
        <InputString 
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
        <InputString 
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
        <InputString 
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
