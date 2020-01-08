import React from 'react';

import { NAMESPACE } from '../../users/constants.js';

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
            <MappedButtonCloseForm namespace={NAMESPACE} />
        </div>
    );
};

export const DivSigninMenu = props => {
    return (
        <div>
            <MappedButtonSignin {...props} />
            <MappedButtonCloseForm namespace={NAMESPACE} />
        </div>
    );
};
