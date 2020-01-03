import { connect } from 'react-redux';

import {
    InputCode,
    InputName,
} from './components/inputs.jsx';

import {
	onChangeCode,
	onChangeName,
} from './actions.js';

import { 
    DivInputs,
    DivItems,
} from './components/groups.jsx';

import { GenresForm } from './components/forms.jsx';

import { NAMESPACE } from './constants.js';

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
// Forms
// --- --- --- --- --- --- --- --- ---

export const MappedGenresForm = connect(
    state => ({
        namespace: NAMESPACE,
        mode: state[NAMESPACE].uiux.mode,
    }),
    ({})
)(GenresForm);
