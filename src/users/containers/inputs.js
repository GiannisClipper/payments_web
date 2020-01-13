import { connect } from 'react-redux';

import {
    InputString,
    InputHidden,
    MessageInput,
} from '../../core/components/inputs.jsx';

import {
	onChangeUsername,
	onChangePassword,
	onChangePassword2,
    onChangeEmail,
} from '../actions.js';

import { NAMESPACE } from '../constants.js';

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
        value: state[NAMESPACE].errors.username,
    }),
)(MessageInput);

export const MappedMessageInputPassword = connect(
    state => ({
        value: state[NAMESPACE].errors.password,
    }),
)(MessageInput);

export const MappedMessageInputPassword2 = connect(
    state => ({
        value: state[NAMESPACE].errors.password2,
    }),
)(MessageInput);

export const MappedMessageInputEmail = connect(
    state => ({
        value: state[NAMESPACE].errors.email,
    }),
)(MessageInput);
