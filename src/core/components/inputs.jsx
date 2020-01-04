import React from 'react';

import { LABELS } from '../constants.js';

/*export class InputString extends React.Component {

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
*/
export class InputValue extends React.Component {

    render() {
        const type = this.props.type;
        const name = this.props.name;
        const label = this.props.label;
        const value = this.props.value;
        const message = this.props.message;
        const onChange = this.props.onChange;
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
                        disabled={!allowEdit}
                    />
                )}

                <span className='message'>{message?message.toString():''}</span>
            </span>
        )
    }
}


/*export class InputRadio extends React.Component {

    render() {
        const name = this.props.name;
        const label = this.props.label;
        const subLabels = this.props.subLabels;
        const values = this.props.values;
        const value = this.props.value;
        const message = this.props.message;
        const onChange = this.props.onChange;
        const allowEdit = this.props.allowEdit;
        let key = 0;

        return (
            <span className={`field field_${name}`}>
                <span className='label'>{label}</span>
                {values.map(x => (
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
                ))}
                <span className='message'>{message?message.toString():''}</span>
            </span>
        )
    }
}*/

export const InputId = ({value}) => {
    return (
        <InputValue 
            name = 'Id'
            label = {LABELS.INPUT_ID}
            value = {value}
        />
    )
}
