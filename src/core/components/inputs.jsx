import React from 'react';

import { LABELS } from '../constants.js';

import { ButtonRequest } from './buttons.jsx';

import { MappedInputStringId } from '../containers.js';

// --- --- --- --- --- --- --- --- ---

export const LabelInput = ({value}) => {
    return (
        <span className='label'>{value}</span>
    )
}

export const MessageInput = ({value}) => {
    return (
        <span className='message'>{value?value.toString():''}</span>  // Value may be object, so convert it to string
    )
}

export const InputString = ({value, allowEdit, onChange, onFocus, onBlur}) => {
    console.log('allowedit', allowEdit, 'value', value);
    return (
        <input 
            value={value}
            disabled={!allowEdit}
            onChange={onChange?event => onChange(event.target.value):null}
            onFocus={onFocus?() => onFocus():null}
            onBlur={onBlur?() => onBlur():null}
        />
    )
}

export const InputRadio = ({name, labels, values, value, allowEdit, onChange}) => {
    let key = 0;
    return (
        <span className='input_radio'>
            values.map(x => (
                <span key={key}>
                    <input
                        type='radio'
                        name={name}
                        value={values[key]}
                        checked={values[key] === value?'checked':''}
                        disabled={!allowEdit}
                        onChange={onChange?event => onChange(event.target.value):null}
                        id={`input_radio_${name}_${values[key]}`}
                    />
                    <label for={`input_radio_${name}_${values[key]}`}>
                        {labels[key++]}
                    </label>
                </span>
            ))
        </span>
    )
}

export class InputValue extends React.Component {

    render() {
        const type = this.props.type;
        const name = this.props.name;
        const label = this.props.label;
        const value = this.props.value;
        const message = this.props.message;
        const onChange = this.props.onChange;
        const onFocus = this.props.onFocus;
        const onBlur = this.props.onBlur;
        const allowEdit = this.props.allowEdit;
        
        // Necessary when type === 'radio'
        const subLabels = this.props.subLabels;
        const values = this.props.values;
        let key = 0;

        return (
            <span className={`field field_${name}`}>
                <span className='label'>{label}</span>

                {type === 'radio'?(
                    values.map(x => (
                        <span key={key}>
                        <input className='value'
                            type='radio'
                            name={name}
                            value={values[key]}
                            checked={values[key] === value?'checked':''}
                            onChange={onChange?event => onChange(event.target.value):null}
                            disabled={!allowEdit}
                        />
                        {subLabels[key++]}</span>
                    ))

                ):(
                    <input className='value'
                        type={type?type:'text'}
                        value={value}
                        onChange={onChange?event => onChange(event.target.value):null}
                        onFocus={onFocus?() => onFocus():null}
                        onBlur={onBlur?() => onBlur():null}
                        disabled={!allowEdit}
                    />
                )}

                <span className='message'>{message?message.toString():''}</span>
            </span>
        )
    }
}

export class InputRelated extends React.Component {

    render() {
        const name = this.props.name;
        const input = this.props.input;
        const request = this.props.request;
        const list = this.props.list;
        const events = this.props.events;

        return (
            <div className={`related related_${name}`}>
                <span>
                    <InputValue
                        type = 'text'
                        name = {name}
                        label = {input.label}
                        value = {input.value}
                        message = {input.message}
                        onChange = {events.onChange}
                        onFocus = {events.onFocus}
                        onBlur = {events.onBlur}     
                        allowEdit = {input.allowEdit}
                    />

                    {input.allowEdit?(
                        <ButtonRequest
                            name = {name}
                            label = {request.label}
                            auth = {request.auth}
                            data = {request.data}
                            allowRequest = {true}
                            onRequest = {events.onRequest}
                            isLoading = {request.isLoading}
                        />
                    ):null}
                </span>

                {input.allowEdit?(
                    <ul>
                    {list.items.order.map(id => (
                        <li key={id}>
                            {`${list.items.data[id]['id']} ${list.items.data[id]['name']}`}
                        </li>
                    ))}
                    </ul>
                ):null}
            </div>
        )
    }
}

// --- --- --- --- --- --- --- --- ---

export const GroupInput = ({name, label, input, message}) => {
    return (
        <span className={`group_input group_input_${name}`}>
            {label?label:null}
            {input?input:null}
            {message?message:null}
        </span>
    )
}

export const LabelInputId = () => {
    return (
        <LabelInput value={LABELS.INPUT_ID} />
    )
}

export const InputStringId = ({value}) => {
    return (
        <InputString value = {value} />
    )
}

export const GroupInputId = ({namespace}) => {
    return (
        <GroupInput
            name='id'
            label={<LabelInputId />}
            input={<MappedInputStringId namespace={namespace} />}
            message={null}
        />
    )
}
