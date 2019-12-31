import React from 'react';

import { LABELS } from '../constants.js';

// --- --- --- --- --- --- --- --- ---

export const InputUsername = ({value, errors, allowEdit, onChangeUsername}) => {
    return (
        <div className='field'>
            <span className='label'>{LABELS.INPUT_USERNAME}</span>
            <input
                value={value}
                onChange={event => onChangeUsername(event.target.value)}
                disabled={!allowEdit}
            />
            <span className='message'>{errors?errors.toString():''}</span>
        </div>
    );
};

export const InputPassword = ({value, errors, allowEdit, onChangePassword}) => {
    return (
        <div className='field'>
            <span className='label'>{LABELS.INPUT_PASSWORD}</span>
            <input
                value={value}
                onChange={event => onChangePassword(event.target.value)}
                disabled={!allowEdit}
            />
            <span className='message'>{errors?errors.toString():''}</span>
        </div>
    );
};

export const InputPassword2 = ({value, errors, allowEdit, onChangePassword2}) => {
    return (
        <div className='field'>
            <span className='label'>{LABELS.INPUT_PASSWORD2}</span>
            <input
                value={value}
                onChange={event => onChangePassword2(event.target.value)}
                disabled={!allowEdit}
            />
            <span className='message'>{errors?errors.toString():''}</span>
        </div>
    );
};

export const InputEmail = ({value, errors, allowEdit, onChangeEmail}) => {
    return (
        <div className='field'>
            <span className='label'>{LABELS.INPUT_EMAIL}</span>
            <input
                value={value}
                onChange={event => onChangeEmail(event.target.value)}
                disabled={!allowEdit}
            />
            <span className='message'>{errors?errors.toString():''}</span>
        </div>
    );
};
