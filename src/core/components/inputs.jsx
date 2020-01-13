import React from 'react';

import { LABELS } from '../constants.js';

// --- --- --- --- --- --- --- --- ---

export const LabelInput = ({value}) => (<span className='label'>{value}</span>)

// --- --- --- --- --- --- --- --- ---

export const MessageInput = ({value}) => (<span className='message'>{value?value.toString():''}</span>)
                                            // value may be an object and should be converted to string

// --- --- --- --- --- --- --- --- ---

export const InputString = ({type, value, allowEdit, onChange, onFocus, onBlur}) => (

    <input 
        type={type?type:'text'}
        value={value}
        disabled={!allowEdit}
        onChange={onChange?event => onChange(event.target.value):null}
        onFocus={onFocus?() => onFocus():null}
        onBlur={onBlur?() => onBlur():null}
    />
)

export const InputHidden = props => (

    <InputString 
        type='password'
        {...props} 
    />
)

export const InputRadio = ({name, labels, values, value, allowEdit, onChange}) => {
    console.log(name, labels, values, value)
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
