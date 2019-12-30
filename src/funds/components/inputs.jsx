import React from 'react';

import {
    DivItemMenu,
} from '../../core/components/menus.jsx';

import {
    MappedInputId,
} from '../../core/containers.js';

import {
    MappedInputCode,
    MappedInputName,
} from '../containers.js';

import { LABELS } from '../constants.js';

// --- --- --- --- --- --- --- --- ---

export const InputCode = ({value, errors, allowEdit, onChangeCode}) => {
    return (
        <div className='field'>
            <span className='label'>{LABELS.INPUT_CODE}</span>
            <input
                value={value}
                onChange={event => onChangeCode(event.target.value)}
                disabled={!allowEdit}
            />
            <span className='message'>{errors?errors.toString():''}</span>
        </div>
    );
};

export const InputName = ({value, errors, allowEdit, onChangeName}) => {
    return (
        <div className='field'>
            <span className='label'>{LABELS.INPUT_NAME}</span>
            <input 
                value={value}
                onChange={event => onChangeName(event.target.value)}
                disabled={!allowEdit}
            />
            <span className='message'>{errors?errors.toString():''}</span>
        </div>
    );
};

export const DivInputs = ({errors, namespace}) => {
    const props = {namespace};

    return (
        <div className='edit'>
            <span className='message'>{errors?errors:''}</span>
            <MappedInputId {...props} />
            <MappedInputCode {...props} />
            <MappedInputName {...props} />
        </div>
    );
};

// --- --- --- --- --- --- --- --- ---

const DivItems = props => {
    const items = props.items; 
    const ids = Object.keys(items);

    return (
        <div className='list'>
            <div className='labels'>
                <span>{LABELS.code}</span>
                <span>{LABELS.name}</span>
            </div>
            <ul className='data'>
                {ids.map(id => (
                <li>
                    <span>{items[id].code}</span>
                    <span>{items[id].name}</span>
                    <DivItemMenu {...props} />
                </li>
                ))}
            </ul>
        </div>
    );
};
