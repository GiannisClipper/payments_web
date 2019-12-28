import React from 'react';

import { LABELS } from '../constants.js';

export const InputId = ({value}) => {
    return (
        <div className='field'>
            <span className='label'>{LABELS.ID}</span>
            <input
                value={value}
                disabled={true}
            />
        </div>
    );
};
