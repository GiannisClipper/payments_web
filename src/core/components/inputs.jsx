import React from 'react';

import Date from '../../core/libs/date.js';

import { LABELS } from '../constants.js';

// --- --- --- --- --- --- --- --- ---

export const LabelInput = ({value}) => (<span className='label'>{value}</span>)

// --- --- --- --- --- --- --- --- ---

export const MessageInput = ({value}) => (<span className='message'>{value?value.toString():''}</span>)
                                            // value may be an object and should be converted to string

// --- --- --- --- --- --- --- --- ---

export const InputString = ({type, value, allowEdit, onChange, onFocus, onBlur, onKeyPress}) => (

    <input 
        type={type?type:'text'}
        value={value}
        disabled={!allowEdit}
        onChange={onChange?event => onChange(event.target.value):null}
        onFocus={onFocus?() => onFocus():null}
        onBlur={onBlur?event => onBlur(event):null}
        onKeyPress={onKeyPress?event => onKeyPress(event):null}
    />
)

export const InputHidden = props => (

    <InputString 
        type='password'
        {...props} 
    />
)

export const InputNumber = props => (

    <InputString
        onKeyPress={event => '0123456789-.'.includes(event.key)?null:event.preventDefault()}
        {...props} 
    />
)

export const InputDate = props => (

    <InputString
        {...props} 
        onKeyPress={event => Date.keys().includes(event.key)?null:event.preventDefault()}
        onChange={value => props.onChange && new Date(value).isDateEditing()?props.onChange(value):null}
        onBlur={event => props.onChange && new Date(event.target.value).isDate()?null:props.onChange('')}
    />
)

export const InputRadio = ({name, labels, values, value, allowEdit, onChange}) => {

    let key = 0;

    return (
        <span className='input_radio'>
            {values.map(x => (
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
                    <label htmlFor={`input_radio_${name}_${values[key]}`}>
                        {labels[key++]}
                    </label>
                </span>
            ))}
        </span>
    )
}

// --- --- --- --- --- --- --- --- ---

export const LabelInputId = () => (<LabelInput value={LABELS.INPUT_ID} />)

export const InputStringId = ({value}) => (<InputString value={value} />)
