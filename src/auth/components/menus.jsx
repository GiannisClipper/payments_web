import React from 'react';

import {
    MappedButtonCloseForm,
} from '../../core/containers.js';

import {
    MappedButtonSignup,
    MappedButtonSignin,
} from '../containers.js';

// --- --- --- --- --- --- --- --- ---

export const DivSignupMenu = props => {
    return (
        <div>
            <MappedButtonSignup {...props} />
            <MappedButtonCloseForm {...props} />
        </div>
    );
};

export const DivSigninMenu = props => {
    return (
        <div>
            <MappedButtonSignin {...props} />
            <MappedButtonCloseForm {...props} />
        </div>
    );
};
