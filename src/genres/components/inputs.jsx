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

export const InputIsIncome = ({value, message, allowEdit, onChange}) => {
    return (
        <InputValue
            type = 'radio'
            name = 'is_income'
            label = {LABELS.INPUT_IS_INCOME}
            subLabels = {[LABELS.INPUT_IS_INCOME_TRUE, LABELS.INPUT_IS_INCOME_FALSE]}
            value = {value.toString()}
            values = {['true', 'false']}
            message = {message}
            allowEdit = {allowEdit}
            onChange = {onChange}
        />
    )
}
