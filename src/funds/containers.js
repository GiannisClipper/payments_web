import { connect } from 'react-redux';

import { NAMESPACE } from './constants.js';

import { FundsForm } from './components/forms.jsx';

import { 
    GroupInputs,
    GroupItems,
} from './components/groups.jsx';

import {
    InputString,
    MessageInput,
} from '../core/components/inputs.jsx';

import {
	onChangeCode,
    onChangeName,
} from './actions.js';

// --- --- --- --- --- --- --- --- ---
// Forms
// --- --- --- --- --- --- --- --- ---

export const MappedFundsForm = connect(
    state => ({
        namespace: NAMESPACE,
        mode: state[NAMESPACE].uiux.mode,
    }), 
    ({})
)(FundsForm);

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

export const MappedInputStringCode = connect(
    state => ({
        value: state[NAMESPACE].data.code,
        allowEdit: state[NAMESPACE].uiux.allowEdit,
    }),
    dispatch => ({
        onChange: value => dispatch(onChangeCode(value)),
    })
)(InputString);

export const MappedInputStringName = connect(
    state => ({
        value: state[NAMESPACE].data.name,
        allowEdit: state[NAMESPACE].uiux.allowEdit,
    }),
    dispatch => ({
        onChange: value => dispatch(onChangeName(value)),
    })
)(InputString);

export const MappedMessageInputCode = connect(
    state => ({
        value: state[NAMESPACE].errors.code,
    }),
)(MessageInput);

export const MappedMessageInputName = connect(
    state => ({
        value: state[NAMESPACE].errors.name,
    }),
)(MessageInput);
