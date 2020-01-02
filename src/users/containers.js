import { connect } from 'react-redux';

import {
    InputUsername,
    InputPassword,
    InputPassword2,
    InputEmail,
} from './components/inputs.jsx';

import {
    DivInputs,
    DivSignupInputs,
    DivSigninInputs,
} from './components/groups.jsx';

import {
    ButtonSignup,
    ButtonSignin,
} from './components/buttons.jsx';

import {
    UsersForm,
    SignupForm,
    SigninForm,
    SignoutForm,
} from './components/forms.jsx';

import {
    onSelectCreate,
    onSelectRetrieve,
    onRequestProcess,
} from '../core/actions.js';

import {
	onChangeUsername,
	onChangePassword,
	onChangePassword2,
    onChangeEmail,
    onSignup,
    onSignin,
    onSignout,
} from './actions.js';

// --- --- --- --- --- --- --- --- ---
// Inputs
// --- --- --- --- --- --- --- --- ---

export const MappedInputUsername = connect(
    (state, {namespace}) => ({
        value: state[namespace].data.username,
        errors: state[namespace].errors.username,
        allowEdit: state[namespace].uiux.allowEdit,
    }),
    (dispatch, {namespace}) => ({
        onChangeUsername: value => dispatch(onChangeUsername(namespace, value)),
    })
)(InputUsername);

export const MappedInputPassword = connect(
    (state, {namespace}) => ({
        value: state[namespace].data.password,
        errors: state[namespace].errors.password,
        allowEdit: state[namespace].uiux.allowEdit,
    }),
    (dispatch, {namespace}) => ({
        onChangePassword: value => dispatch(onChangePassword(namespace, value)),
    })
)(InputPassword);

export const MappedInputPassword2 = connect(
    (state, {namespace}) => ({
        value: state[namespace].data.password2,
        errors: state[namespace].errors.password2,
        allowEdit: state[namespace].uiux.allowEdit,
    }),
    (dispatch, {namespace}) => ({
        onChangePassword2: value => dispatch(onChangePassword2(namespace, value)),
    })
)(InputPassword2);

export const MappedInputEmail = connect(
    (state, {namespace}) => ({
        value: state[namespace].data.email,
        errors: state[namespace].errors.email,
        allowEdit: state[namespace].uiux.allowEdit,
    }),
    (dispatch, {namespace}) => ({
        onChangeEmail: value => dispatch(onChangeEmail(namespace, value)),
    })
)(InputEmail);

// --- --- --- --- --- --- --- --- ---
// Groups
// --- --- --- --- --- --- --- --- ---

export const MappedDivInputs = connect(
    (state, {namespace}) => ({
        errors: state[namespace].errors.errors,
    }),
)(DivInputs);

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

// --- --- --- --- --- --- --- --- ---
// Forms
// --- --- --- --- --- --- --- --- ---

export const MappedUsersForm = connect(
    state => ({
        namespace: 'users',
        mode: state['users'].uiux.mode,
    }), 
    dispatch => ({})
)(UsersForm);

export const MappedSignupForm = connect(
    state => ({
        namespace: 'users',
    }),
    dispatch => ({
        onSelectCreate: namespace => dispatch(onSelectCreate(namespace)),
    })
    )(SignupForm);

export const MappedSigninForm = connect(
    state => ({
        namespace: 'users',
    }), 
    dispatch => ({
        onSelectRetrieve: namespace => dispatch(onSelectRetrieve(namespace)),
    })
)(SigninForm);

export const MappedSignoutForm = connect(
    state => ({
        namespace: 'users',
        auth: state.auth,
    }),
    dispatch => ({
        onSignout: (namespace, message) => dispatch(onSignout(namespace, message)),
    })
)(SignoutForm);
