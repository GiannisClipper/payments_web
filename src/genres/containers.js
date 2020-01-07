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
    InputFund,
} from './components/inputs.jsx';

import {
    ButtonSelectRetrieveFund
} from './components/buttons.jsx';

import {
	onChangeCode,
    onChangeName,
    onChangeIsIncoming,
    onSelectRetrieveFund,
} from './actions.js';

// --- --- --- --- --- --- --- --- ---
// Forms
// --- --- --- --- --- --- --- --- ---

export const MappedGenresForm = connect(
    state => ({
        mode: state[NAMESPACE].uiux.mode,
    }),
    ({})
)(GenresForm);

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

export const MappedInputCode = connect(
    state => ({
        value: state[NAMESPACE].data.code,
        message: state[NAMESPACE].errors.code,
        allowEdit: state[NAMESPACE].uiux.allowEdit,
    }),
    dispatch => ({
        onChange: value => dispatch(onChangeCode(NAMESPACE, value)),
    })
)(InputCode);

export const MappedInputName = connect(
    state => ({
        value: state[NAMESPACE].data.name,
        message: state[NAMESPACE].errors.name,
        allowEdit: state[NAMESPACE].uiux.allowEdit,
    }),
    dispatch => ({
        onChange: value => dispatch(onChangeName(NAMESPACE, value)),
    })
)(InputName);

export const MappedInputIsIncoming = connect(
    state => ({
        value: state[NAMESPACE].data.is_incoming,
        message: state[NAMESPACE].errors.is_incoming,
        allowEdit: state[NAMESPACE].uiux.allowEdit,
    }),
    dispatch => ({
        onChange: value => dispatch(onChangeIsIncoming(NAMESPACE, value)),
    })
)(InputIsIncoming);

export const MappedInputFund = connect(
    state => ({
        value: (x => x?x.id + x.name:'')(state[NAMESPACE].data.fund),
        message: state[NAMESPACE].errors.fund,
    }),
    ({})
)(InputFund);

// --- --- --- --- --- --- --- --- ---
// Buttons
// --- --- --- --- --- --- --- --- ---

export const MappedButtonSelectRetrieveFund = connect(
    state => ({}),
    dispatch => ({
        onSelect: () => dispatch(onSelectRetrieveFund(NAMESPACE)),
    })
)(ButtonSelectRetrieveFund);

