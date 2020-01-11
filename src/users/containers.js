import { connect } from 'react-redux';

import { NAMESPACE } from './constants.js';

import { UsersForm } from './components/forms.jsx';

import { 
    GroupInputs,
    GroupItems,
} from './components/groups.jsx';

import {
    InputString,
    InputHidden,
    MessageInput,
} from '../core/components/inputs.jsx';

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

export const MappedGroupInputs = connect(
    state => ({
        message: state[NAMESPACE].errors.errors,
    }),
    ({})
)(GroupInputs);

export const MappedGroupItems = connect(
    (state, {items}) => ({
        items: state[NAMESPACE].items,
    }),
    ({})
)(GroupItems);

// --- --- --- --- --- --- --- --- ---
// Inputs
// --- --- --- --- --- --- --- --- ---

export const MappedInputStringUsername = connect(
    state => ({
        value: state[NAMESPACE].data.username,
        allowEdit: state[NAMESPACE].uiux.allowEdit,
    }),
    dispatch => ({
        onChange: value => dispatch(onChangeUsername(value)),
    })
)(InputString);

export const MappedInputHiddenPassword = connect(
    state => ({
        value: state[NAMESPACE].data.password,
        allowEdit: state[NAMESPACE].uiux.allowEdit,
    }),
    dispatch => ({
        onChange: value => dispatch(onChangePassword(value)),
    })
)(InputHidden);

export const MappedInputHiddenPassword2 = connect(
    state => ({
        value: state[NAMESPACE].data.password2,
        allowEdit: state[NAMESPACE].uiux.allowEdit,
    }),
    dispatch => ({
        onChange: value => dispatch(onChangePassword2(value)),
    })
)(InputHidden);

export const MappedInputStringEmail = connect(
    state => ({
        value: state[NAMESPACE].data.email,
        allowEdit: state[NAMESPACE].uiux.allowEdit,
    }),
    dispatch=> ({
        onChange: value => dispatch(onChangeEmail(value)),
    })
)(InputString);

export const MappedMessageInputUsername = connect(
    state => ({
        message: state[NAMESPACE].errors.username,
    }),
)(MessageInput);

export const MappedMessageInputPassword = connect(
    state => ({
        message: state[NAMESPACE].errors.password,
    }),
)(MessageInput);

export const MappedMessageInputPassword2 = connect(
    state => ({
        message: state[NAMESPACE].errors.password2,
    }),
)(MessageInput);

export const MappedMessageInputEmail = connect(
    state => ({
        message: state[NAMESPACE].errors.email,
    }),
)(MessageInput);
