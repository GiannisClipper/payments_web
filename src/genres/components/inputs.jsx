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

export const InputIsIncoming = ({value, message, allowEdit, onChange}) => {
    return (
        <InputValue
            type = 'radio'
            name = 'is_incoming'
            label = {LABELS.INPUT_IS_INCOMING}
            subLabels = {[LABELS.INPUT_IS_INCOMING_TRUE, LABELS.INPUT_IS_INCOMING_FALSE]}
            value = {value.toString()}
            values = {['true', 'false']}
            message = {message}
            allowEdit = {allowEdit}
            onChange = {onChange}
        />
    )
}

export const InputFund = ({value, message}) => {
    return (
        <InputValue 
            name = 'fund'
            label = {LABELS.INPUT_FUND}
            value = {value}
            message = {message}
        />
    )
}
