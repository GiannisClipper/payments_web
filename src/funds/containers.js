import { connect } from 'react-redux';

import {
    InputCode,
    InputName,
} from './components/inputs.jsx';

import { 
    DivInputs,
    DivItems,
} from './components/groups.jsx';

import {
    FundsForm,
} from './components/forms.jsx';

import {
	onChangeCode,
	onChangeName,
} from './actions.js';

// --- --- --- --- --- --- --- --- ---
// Inputs
// --- --- --- --- --- --- --- --- ---

export const MappedInputCode = connect(
    (state, {namespace}) => ({
        value: state[namespace].data.code,
        errors: state[namespace].errors.code,
        allowEdit: state[namespace].uiux.allowEdit,
    }),
    (dispatch, {namespace}) => ({
        onChangeCode: value => dispatch(onChangeCode(namespace, value)),
    })
)(InputCode);

export const MappedInputName = connect(
    (state, {namespace}) => ({
        value: state[namespace].data.name,
        errors: state[namespace].errors.name,
        allowEdit: state[namespace].uiux.allowEdit,
    }),
    (dispatch, {namespace}) => ({
        onChangeName: value => dispatch(onChangeName(namespace, value)),
    })
)(InputName);

// --- --- --- --- --- --- --- --- ---
// Groups
// --- --- --- --- --- --- --- --- ---

export const MappedDivInputs = connect(
    (state, {namespace}) => ({
        errors: state[namespace].errors.errors,
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

export const MappedFundsForm = connect(
    state => ({
        namespace: 'funds',
        mode: state['funds'].uiux.mode,
    }), 
    ({})
)(FundsForm);
