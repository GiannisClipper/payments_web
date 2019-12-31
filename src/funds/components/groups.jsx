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

import { LABELS as CORE_LABELS } from '../../core/constants.js';

import { LABELS } from '../constants.js';

// --- --- --- --- --- --- --- --- ---

export const DivInputs = ({namespace, errors}) => {
    return (
        <div className='edit'>
            <span className='message'>{errors?errors:''}</span>
            <MappedInputId {...{namespace}} />
            <MappedInputCode {...{namespace}} />
            <MappedInputName {...{namespace}} />
        </div>
    );
};

export const DivItems = ({namespace, items}) => {
    return (
        <div className='list'>
            <div className='labels'>
                <span>({CORE_LABELS.INPUT_ID})</span>
                <span>{LABELS.INPUT_CODE}</span>
                <span>{LABELS.INPUT_NAME}</span>
            </div>
            <ul className='data'>
                {items.order.map(id => (
                <li key={id}>
                    <span>({items.data[id].id})</span>
                    <span>{items.data[id].code}</span>
                    <span>{items.data[id].name}</span>
                    <DivItemMenu {...{namespace, id}} />
                </li>
                ))}
            </ul>
        </div>
    );
};
