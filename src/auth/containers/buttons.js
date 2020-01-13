import { connect } from 'react-redux';

import {
    ButtonSignup,
    ButtonSignin,
} from '../components/buttons.jsx';

import {
    onRequestProcess,
} from '../../core/actions.js';

import {
    onSignup,
    onSignin,
} from '../actions.js';

import { NAMESPACE } from '../../users/constants.js';

// --- --- --- --- --- --- --- --- ---

export const MappedButtonSignup = connect(
    (state, {hostArgs}) => ({
        auth: state.auth,
        data: state[NAMESPACE].data,
        allowRequest: state[NAMESPACE].uiux.allowRequest,
        isLoading: state[NAMESPACE].uiux.isLoading,
    }),
    (dispatch, {hostArgs}) => ({
        onRequest: (auth, data) => dispatch(onRequestProcess(NAMESPACE, hostArgs, null, data, onSignup)),
    })
)(ButtonSignup);

export const MappedButtonSignin = connect(
    (state, {hostArgs}) => ({
        auth: state.auth,
        data: state[NAMESPACE].data,
        allowRequest: state[NAMESPACE].uiux.allowRequest,
        isLoading: state[NAMESPACE].uiux.isLoading,
    }),
    (dispatch, {hostArgs}) => ({
        onRequest: (auth, data) => dispatch(onRequestProcess(NAMESPACE, hostArgs, null, data, onSignin)),
    })
)(ButtonSignin);
