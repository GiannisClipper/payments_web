import React from 'react';

import { NAMESPACE } from '../../users/constants.js';

import { LABELS } from '../constants.js';

import {
    MappedButtonCloseForm,
} from '../../core/containers.js';

import {
    MappedButtonSignup,
    MappedButtonSignin,
} from '../containers.js';

// --- --- --- --- --- --- --- --- ---

export const ButtonSignup = ({auth, data, allowRequest, isLoading, onRequest}) => {
    return (
        <button
            onClick={() => onRequest(auth, data)}
            disabled={!allowRequest}
        >
            {(isLoading)?(<i className="fa fa-refresh fa-spin"></i>):null}
            {LABELS.BUTTON_SIGNUP}
        </button>
    )
}

export const ButtonSignin = ({auth, data, allowRequest, isLoading, onRequest}) => {
    return (
        <button
            onClick={() => onRequest(auth, data)}
            disabled={!allowRequest}
        >
            {(isLoading)?(<i className="fa fa-refresh fa-spin"></i>):null}
            {LABELS.BUTTON_SIGNIN}
        </button>
    )
}

// --- --- --- --- --- --- --- --- ---

export const GroupSignupButtons = props => {
    return (
        <div>
            <MappedButtonSignup {...props} />
            <MappedButtonCloseForm namespace={NAMESPACE} />
        </div>
    )
}

export const GroupSigninButtons = props => {
    return (
        <div>
            <MappedButtonSignin {...props} />
            <MappedButtonCloseForm namespace={NAMESPACE} />
        </div>
    )
}