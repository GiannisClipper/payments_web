import { connect } from 'react-redux';

import { NAMESPACE } from './constants.js';

import { GenresForm } from './components/forms.jsx';

import { 
    DivInputs,
    DivItems,
} from './components/groups.jsx';

import {
    InputCode,
    InputName,
    InputIsIncoming,
} from './components/inputs.jsx';

import {
	onChangeCode,
    onChangeName,
    onChangeIsIncoming,
} from './actions.js';

// --- --- --- --- --- --- --- --- ---
// Forms
// --- --- --- --- --- --- --- --- ---

export const MappedGenresForm = connect(
    state => ({
        namespace: NAMESPACE,
        mode: state[NAMESPACE].uiux.mode,
    }),
    ({})
)(GenresForm);

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

export const MappedInputCode = connect(
    (state, {namespace}) => ({
        value: state[namespace].data.code,
        message: state[namespace].errors.code,
        allowEdit: state[namespace].uiux.allowEdit,
    }),
    (dispatch, {namespace}) => ({
        onChange: value => dispatch(onChangeCode(namespace, value)),
    })
)(InputCode);

export const MappedInputName = connect(
    (state, {namespace}) => ({
        value: state[namespace].data.name,
        message: state[namespace].errors.name,
        allowEdit: state[namespace].uiux.allowEdit,
    }),
    (dispatch, {namespace}) => ({
        onChange: value => dispatch(onChangeName(namespace, value)),
    })
)(InputName);

export const MappedInputIsIncoming = connect(
    (state, {namespace}) => ({
        value: state[namespace].data.is_incoming,
        message: state[namespace].errors.is_incoming,
        allowEdit: state[namespace].uiux.allowEdit,
    }),
    (dispatch, {namespace}) => ({
        onChange: value => dispatch(onChangeIsIncoming(namespace, value)),
    })
)(InputIsIncoming);

