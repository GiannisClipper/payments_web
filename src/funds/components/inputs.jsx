import React from 'react';

import { InputValue } from '../../core/components/inputs.jsx';

import { LABELS } from '../constants.js';

// --- --- --- --- --- --- --- --- ---

export const InputCode = ({value, message, allowEdit, onChange}) => {
    return (
        <InputValue 
            name = 'code'
            label = {LABELS.INPUT_CODE}
            value = {value}
            message = {message}
            allowEdit = {allowEdit}
            onChange = {onChange}
        />
    )
}

export const InputName = ({value, message, allowEdit, onChange}) => {
    return (
        <InputValue 
            name = 'name'
            label = {LABELS.INPUT_NAME}
            value = {value}
            message = {message}
            allowEdit = {allowEdit}
            onChange = {onChange}
        />
    )
}
