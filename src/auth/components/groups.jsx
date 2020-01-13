import React from 'react';

import {
    MappedButtonCloseForm,
} from '../../core/containers/buttons.js';

import {
    MappedButtonSignup,
    MappedButtonSignin,
} from '../containers/buttons.js';

import { NAMESPACE } from '../../users/constants.js';

// --- --- --- --- --- --- --- --- ---

export const GroupSignupButtons = props => (

    <div>
        <MappedButtonSignup {...props} />
        <MappedButtonCloseForm namespace={NAMESPACE} />
    </div>
)

export const GroupSigninButtons = props => (

    <div>
        <MappedButtonSignin {...props} />
        <MappedButtonCloseForm namespace={NAMESPACE} />
    </div>
)
