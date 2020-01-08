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
        mode: state[NAMESPACE].uiux.mode,
    }), 
    dispatch => ({})
)(UsersForm);

// --- --- --- --- --- --- --- --- ---
// Groups
// --- --- --- --- --- --- --- --- ---

export const MappedDivInputs = connect(
    state => ({
        message: state[NAMESPACE].errors.errors,
    }),
    ({})
)(DivInputs);

export const MappedDivItems = connect(
    (state, {items}) => ({
        items: state[NAMESPACE].items,
    }),
    ({})
)(DivItems);

// --- --- --- --- --- --- --- --- ---
// Inputs
// --- --- --- --- --- --- --- --- ---

export const MappedInputUsername = connect(
    state => ({
        value: state[NAMESPACE].data.username,
        message: state[NAMESPACE].errors.username,
        allowEdit: state[NAMESPACE].uiux.allowEdit,
    }),
    dispatch => ({
        onChange: value => dispatch(onChangeUsername(value)),
    })
)(InputUsername);

export const MappedInputPassword = connect(
    state => ({
        value: state[NAMESPACE].data.password,
        message: state[NAMESPACE].errors.password,
        allowEdit: state[NAMESPACE].uiux.allowEdit,
    }),
    dispatch => ({
        onChange: value => dispatch(onChangePassword(value)),
    })
)(InputPassword);

export const MappedInputPassword2 = connect(
    state => ({
        value: state[NAMESPACE].data.password2,
        message: state[NAMESPACE].errors.password2,
        allowEdit: state[NAMESPACE].uiux.allowEdit,
    }),
    dispatch => ({
        onChange: value => dispatch(onChangePassword2(value)),
    })
)(InputPassword2);

export const MappedInputEmail = connect(
    state => ({
        value: state[NAMESPACE].data.email,
        message: state[NAMESPACE].errors.email,
        allowEdit: state[NAMESPACE].uiux.allowEdit,
    }),
    dispatch=> ({
        onChange: value => dispatch(onChangeEmail(value)),
    })
)(InputEmail);
