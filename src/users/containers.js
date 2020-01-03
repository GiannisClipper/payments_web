import { connect } from 'react-redux';

import { NAMESPACE } from './constants.js';

import {
    InputUsername,
    InputPassword,
    InputPassword2,
    InputEmail,
} from './components/inputs.jsx';

import { DivInputs } from './components/groups.jsx';

import { UsersForm } from './components/forms.jsx';

import {
	onChangeUsername,
	onChangePassword,
	onChangePassword2,
    onChangeEmail,
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

// --- --- --- --- --- --- --- --- ---
// Forms
// --- --- --- --- --- --- --- --- ---

export const MappedUsersForm = connect(
    state => ({
        namespace: NAMESPACE,
        mode: state[NAMESPACE].uiux.mode,
    }), 
    dispatch => ({})
)(UsersForm);
