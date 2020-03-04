import React from 'react';

import { LABELS } from '../constants.js';

// --- --- --- --- --- --- --- --- ---

export const ButtonSignup = ({auth, data, allowRequest, isLoading, onRequest}) => (
    <button
        onClick={() => onRequest(auth, data)}
        disabled={!allowRequest}
    >
        {(isLoading)?(<i className="fa fa-refresh fa-spin"></i>):null}
        {LABELS.BUTTON_SIGNUP}
    </button>
)

export const ButtonSignin = ({auth, data, allowRequest, isLoading, onRequest}) => (
    <button
        onClick={() => onRequest(auth, data)}
        disabled={!allowRequest}
    >
        {(isLoading)?(<i className="fa fa-refresh fa-spin"></i>):null}
        {LABELS.BUTTON_SIGNIN}
    </button>
)
