import React from 'react';

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
