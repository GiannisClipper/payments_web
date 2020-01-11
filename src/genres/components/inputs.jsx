import React from 'react';

import { 
    LabelInput,
    InputRadio,
    GroupInput,
} from '../../core/components/inputs.jsx';

import {
    MappedInputStringCode,
    MappedInputStringName,
    MappedInputRadioIsIncoming,
    MappedMessageInputCode,
    MappedMessageInputName,
} from '../containers.js';

import { InputRelated } from '../../core/components/inputs.jsx';

import { LABELS } from '../constants.js';

// --- --- --- --- --- --- --- --- ---

export const LabelInputCode = () => {
    return (
        <LabelInput value={LABELS.INPUT_CODE} />
    )
}

export const LabelInputName = () => {
    return (
        <LabelInput value={LABELS.INPUT_NAME} />
    )
}

export const LabelInputIsIncoming = () => {
    return (
        <LabelInput value={LABELS.INPUT_IS_INCOMING} />
    )
}

export const InputRadioIsIncoming = props => {
    return (
        <InputRadio
            name='is_incoming'
            values={['true', 'false']}
            labels={[LABELS.INPUT_IS_INCOMING_TRUE, LABELS.INPUT_IS_INCOMING_FALSE]}
            {...props}
        />
    )
}

export const GroupInputCode = () => {
    return (
        <GroupInput
            name='code'
            label={<LabelInputCode />}
            input={<MappedInputStringCode />}
            message={<MappedMessageInputCode />}
        />
    )
}

export const GroupInputName = () => {
    return (
        <GroupInput
            name='name'
            label={<LabelInputName />}
            input={<MappedInputStringName />}
            message={<MappedMessageInputName />}
        />
    )
}

export const GroupInputIsIncoming = () => {
    return (
        <GroupInput
            name='is_incoming'
            label={<LabelInputIsIncoming />}
            input={<MappedInputRadioIsIncoming />}
            message={null}
        />
    )
}

// --- --- --- --- --- --- --- --- ---

/*export const InputCode = ({value, message, allowEdit, onChange}) => {
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
}*/

export const InputFund = ({input, request, list, events}) => {

    input.label = LABELS.INPUT_FUND;
    request.label = '...';

    return (
        <InputRelated
            name = 'fund'
            input = {input}
            request = {request}
            list = {list}
            events = {events}
        />
    )
}
