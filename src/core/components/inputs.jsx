import React from 'react';

import { LABELS } from '../constants.js';

export class InputString extends React.Component {

    render() {
        const name = this.props.name;
        const label = this.props.label;
        const value = this.props.value;
        const message = this.props.message;
        const onChange = this.props.onChange;
        const allowEdit = this.props.allowEdit;

        return (
            <span className={`field field_${name}`}>
                <span className='label'>{label}</span>
                <input className='value'
                    value={value}
                    onChange={onChange?event => onChange(event.target.value):null}
                    disabled={!allowEdit}
                />
                <span className='message'>{message?message.toString():''}</span>
            </span>
        )
    }
}

export const InputId = ({value}) => {
    return (
        <InputString 
            name = 'Id'
            label = {LABELS.INPUT_ID}
            value = {value}
        />
    )
}
