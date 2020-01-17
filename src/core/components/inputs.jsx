import React from 'react';

import Date from '../../core/libs/date.js';

import Num from '../../core/libs/num.js';

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

export const InputNumber = props => {

    let num = new Num();
    num.minValue = -999999.99;
    num.maxValue = +999999.99;

    return (
        <InputString
            {...props}
            onKeyPress={event => num.keys().includes(event.key)?null:event.preventDefault()}
            onChange={value => props.onChange && num.setValue(value).validChange()?props.onChange(value):null}
            onBlur={event => props.onChange?props.onChange(num.setValue(event.target.value).getValue()):null}
        />
    )
}

export const InputDate = props => {

    let date = new Date();

    return (
        <InputString
            {...props} 
            onKeyPress={event => date.keys().includes(event.key)?null:event.preventDefault()}
            onChange={value => props.onChange && date.setValue(value).validChange()?props.onChange(value):null}
            onBlur={event => props.onChange?props.onChange(date.setValue(event.target.value).getValue()):null}
        />
    )
}

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
