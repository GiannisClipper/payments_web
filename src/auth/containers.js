import { connect } from 'react-redux';

import { NAMESPACE } from '../users/constants.js';

import {
    SignupForm,
    SigninForm,
    SignoutForm,
} from './components/forms.jsx';

import {
    GroupSignupInputs,
    GroupSigninInputs,
} from './components/inputs.jsx';

import {
    ButtonSignup,
    ButtonSignin,
} from './components/buttons.jsx';

import {
    onSelectCreate,
    onSelectRetrieve,
    onRequestProcess,
} from '../core/actions.js';

import {
    onSignup,
    onSignin,
    onSignout,
} from './actions.js';

// --- --- --- --- --- --- --- --- ---
// Forms
// --- --- --- --- --- --- --- --- ---

export const MappedSignupForm = connect(
    state => ({}),
    dispatch => ({
        onSelectCreate: () => dispatch(onSelectCreate(NAMESPACE)),
    })
    )(SignupForm);

export const MappedSigninForm = connect(
    state => ({}),
    dispatch => ({
        onSelectRetrieve: () => dispatch(onSelectRetrieve(NAMESPACE)),
    })
)(SigninForm);

export const MappedSignoutForm = connect(
    state => ({
        auth: state.auth,
    }),
    dispatch => ({
        onSignout: (auth, message) => dispatch(onSignout(auth, message)),
    })
)(SignoutForm);

// --- --- --- --- --- --- --- --- ---
// Groups
// --- --- --- --- --- --- --- --- ---

export const MappedGroupSignupInputs = connect(
    state => ({
        errors: state[NAMESPACE].errors.errors,
    }),
)(GroupSignupInputs);

export const MappedGroupSigninInputs = connect(
    state => ({
        errors: state[NAMESPACE].errors.errors,
    }),
)(GroupSigninInputs);

// --- --- --- --- --- --- --- --- ---
// Buttons
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
