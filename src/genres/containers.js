import { connect } from 'react-redux';

import { NAMESPACE } from './constants.js';

import { HOST_ARGS } from '../root/constants.js';

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
	onChangeCode,
    onChangeName,
    onChangeIsIncoming,
    onChangeFund,
    onFocusFund,
    onBlurFund,
    onSuccessRetrieveFunds,
} from './actions.js';

import { onRequestProcess } from '../core/actions.js';

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
        onChange: value => dispatch(onChangeCode(value)),
    })
)(InputCode);

export const MappedInputName = connect(
    state => ({
        value: state[NAMESPACE].data.name,
        message: state[NAMESPACE].errors.name,
        allowEdit: state[NAMESPACE].uiux.allowEdit,
    }),
    dispatch => ({
        onChange: value => dispatch(onChangeName(value)),
    })
)(InputName);

export const MappedInputIsIncoming = connect(
    state => ({
        value: state[NAMESPACE].data.is_incoming,
        message: state[NAMESPACE].errors.is_incoming,
        allowEdit: state[NAMESPACE].uiux.allowEdit,
    }),
    dispatch => ({
        onChange: value => dispatch(onChangeIsIncoming(value)),
    })
)(InputIsIncoming);

export const MappedInputFund = connect(
    state => ({
        input: {
            value: state[NAMESPACE].related.fund.filter, //(x => x?`${x.id} ${x.name}`:'')(state[NAMESPACE].data.fund),
            message: state[NAMESPACE].errors.fund,
            allowEdit: state[NAMESPACE].uiux.allowEdit,    
        },
        request: {
            isLoading: state[NAMESPACE].uiux.isLoading,
            auth: state.auth,
            data: state[NAMESPACE].data.fund,    
        },
        list: {
            items: state[NAMESPACE].related.fund.items,
        },
    }),
    dispatch => ({
        events: {
            onChange: value => dispatch(onChangeFund(value)),
            onFocus: () => dispatch(onFocusFund()),
            onBlur: () => dispatch(onBlurFund()),
            onRequest: (auth, data) => dispatch(onRequestProcess(NAMESPACE, HOST_ARGS.RETRIEVE_FUNDS, auth, data, onSuccessRetrieveFunds)),
        },
    })
)(InputFund);
