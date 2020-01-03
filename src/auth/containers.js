import { connect } from 'react-redux';

import { NAMESPACE } from '../users/constants.js';

import {
    SignupForm,
    SigninForm,
    SignoutForm,
} from './components/forms.jsx';

import {
    DivSignupInputs,
    DivSigninInputs,
} from './components/groups.jsx';

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
    state => ({
        namespace: NAMESPACE,
    }),
    dispatch => ({
        onSelectCreate: namespace => dispatch(onSelectCreate(namespace)),
    })
    )(SignupForm);

export const MappedSigninForm = connect(
    state => ({
        namespace: NAMESPACE,
    }),
    dispatch => ({
        onSelectRetrieve: namespace => dispatch(onSelectRetrieve(namespace)),
    })
)(SigninForm);

export const MappedSignoutForm = connect(
    state => ({
        namespace: NAMESPACE,
        auth: state.auth,
    }),
    dispatch => ({
        onSignout: (namespace, auth, message) => dispatch(onSignout(namespace, auth, message)),
    })
)(SignoutForm);

// --- --- --- --- --- --- --- --- ---
// Groups
// --- --- --- --- --- --- --- --- ---

export const MappedDivSignupInputs = connect(
    (state, {namespace}) => ({
        errors: state[namespace].errors.errors,
    }),
)(DivSignupInputs);

export const MappedDivSigninInputs = connect(
    (state, {namespace}) => ({
        errors: state[namespace].errors.errors,
    }),
)(DivSigninInputs);

// --- --- --- --- --- --- --- --- ---
// Buttons
// --- --- --- --- --- --- --- --- ---

export const MappedButtonSignup = connect(
    (state, {namespace, hostArgs}) => ({
        auth: state.auth,
        data: state[namespace].data,
        allowRequest: state[namespace].uiux.allowRequest,
        isLoading: state[namespace].uiux.isLoading,
    }),
    (dispatch, {namespace, hostArgs}) => ({
        onRequest: (auth, data) => dispatch(onRequestProcess(namespace, hostArgs, null, data, onSignup)),
    })
)(ButtonSignup);

export const MappedButtonSignin = connect(
    (state, {namespace, hostArgs}) => ({
        auth: state.auth,
        data: state[namespace].data,
        allowRequest: state[namespace].uiux.allowRequest,
        isLoading: state[namespace].uiux.isLoading,
    }),
    (dispatch, {namespace, hostArgs}) => ({
        onRequest: (auth, data) => dispatch(onRequestProcess(namespace, hostArgs, null, data, onSignin)),
    })
)(ButtonSignin);
