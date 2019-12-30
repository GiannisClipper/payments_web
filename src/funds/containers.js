import { connect } from 'react-redux';

import {
    InputCode,
    InputName,
    DivInputs,
} from './components/inputs.jsx';

import {
    FundsForm,
} from './components/forms.jsx';

import {
	onChangeCode,
	onChangeName,
} from './actions.js';

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

export const MappedDivInputs = connect(
    (state, {namespace}) => ({
        errors: state[namespace].errors.errors,
    }),
)(DivInputs);

// --- --- --- --- --- --- --- --- ---

export const MappedFundsForm = connect(
    state => ({
        namespace: 'funds',
        mode: state['funds'].uiux.mode,
    }), 
    ({})
)(FundsForm);
