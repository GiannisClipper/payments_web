import { connect } from 'react-redux';

import { NAMESPACE } from './constants.js';

import { HOST_ARGS } from '../root/constants.js';

import { GenresForm } from './components/forms.jsx';

import { 
    GroupInputs,
    GroupItems,
} from './components/groups.jsx';

import {
    InputString,
    MessageInput,
} from '../core/components/inputs.jsx';

import {
    InputRadioIsIncoming,
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

export const MappedInputRadioIsIncoming = connect(
    state => ({
        value: state[NAMESPACE].data.is_incoming,
        allowEdit: state[NAMESPACE].uiux.allowEdit,
    }),
    dispatch => ({
        onChange: value => dispatch(onChangeIsIncoming(value)),
    })
)(InputRadioIsIncoming);


export const MappedMessageInputCode = connect(
    state => ({
        message: state[NAMESPACE].errors.code,
    }),
)(MessageInput);

export const MappedMessageInputName = connect(
    state => ({
        message: state[NAMESPACE].errors.name,
    }),
)(MessageInput);




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
