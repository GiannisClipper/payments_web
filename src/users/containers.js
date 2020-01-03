import { connect } from 'react-redux';

import { NAMESPACE } from './constants.js';

import { UsersForm } from './components/forms.jsx';

import { 
    DivInputs,
    DivItems,
} from './components/groups.jsx';

import {
    InputUsername,
    InputPassword,
    InputPassword2,
    InputEmail,
} from './components/inputs.jsx';

import {
	onChangeUsername,
	onChangePassword,
	onChangePassword2,
    onChangeEmail,
} from './actions.js';

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

// --- --- --- --- --- --- --- --- ---
// Groups
// --- --- --- --- --- --- --- --- ---

export const MappedDivInputs = connect(
    (state, {namespace}) => ({
        message: state[namespace].errors.errors,
    }),
    ({})
)(DivInputs);

export const MappedDivItems = connect(
    (state, {namespace, items}) => ({
        items: state[namespace].items,
    }),
    ({})
)(DivItems);

// --- --- --- --- --- --- --- --- ---
// Inputs
// --- --- --- --- --- --- --- --- ---

export const MappedInputUsername = connect(
    (state, {namespace}) => ({
        value: state[namespace].data.username,
        message: state[namespace].errors.username,
        allowEdit: state[namespace].uiux.allowEdit,
    }),
    (dispatch, {namespace}) => ({
        onChange: value => dispatch(onChangeUsername(namespace, value)),
    })
)(InputUsername);

export const MappedInputPassword = connect(
    (state, {namespace}) => ({
        value: state[namespace].data.password,
        message: state[namespace].errors.password,
        allowEdit: state[namespace].uiux.allowEdit,
    }),
    (dispatch, {namespace}) => ({
        onChange: value => dispatch(onChangePassword(namespace, value)),
    })
)(InputPassword);

export const MappedInputPassword2 = connect(
    (state, {namespace}) => ({
        value: state[namespace].data.password2,
        message: state[namespace].errors.password2,
        allowEdit: state[namespace].uiux.allowEdit,
    }),
    (dispatch, {namespace}) => ({
        onChange: value => dispatch(onChangePassword2(namespace, value)),
    })
)(InputPassword2);

export const MappedInputEmail = connect(
    (state, {namespace}) => ({
        value: state[namespace].data.email,
        message: state[namespace].errors.email,
        allowEdit: state[namespace].uiux.allowEdit,
    }),
    (dispatch, {namespace}) => ({
        onChange: value => dispatch(onChangeEmail(namespace, value)),
    })
)(InputEmail);
