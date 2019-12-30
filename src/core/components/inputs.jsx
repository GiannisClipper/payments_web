import React from 'react';

import { LABELS } from '../constants.js';

export const InputId = ({value}) => {
    return (
        <div className='field'>
            <span className='label'>{LABELS.INPUT_ID}</span>
            <input
                value={value}
                disabled={true}
            />
        </div>
    );
};
