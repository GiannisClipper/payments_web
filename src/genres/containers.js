import { connect } from 'react-redux';

import { NAMESPACE, LABELS } from './constants.js';

import { HOST_ARGS } from '../root/constants.js';

import { GenresForm } from './components/forms.jsx';

import {
    RelatedList,
} from '../core/components/forms.jsx';

import { 
    GroupInputs,
    GroupItems,
} from './components/groups.jsx';

import {
    InputString,
    InputRadio,
    MessageInput,
} from '../core/components/inputs.jsx';

import { ButtonRequestRelated } from '../core/components/buttons.jsx';

import {
	onChangeCode,
    onChangeName,
    onChangeIsIncoming,
    onChangeFund,
    onFocusFund,
    onBlurFund,
    onSuccessRelatedFund,
} from './actions.js';

import { 
    onRequestProcess,
    onSelectRelated,
} from '../core/actions.js';

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
        relatedNamespace: state[NAMESPACE].related.namespace,
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
        name: 'is_incoming',
        values: ['true', 'false'],
        labels: [LABELS.INPUT_IS_INCOMING_TRUE, LABELS.INPUT_IS_INCOMING_FALSE],
        value: state[NAMESPACE].data.is_incoming,
        allowEdit: state[NAMESPACE].uiux.allowEdit,
    }),
    dispatch => ({
        onChange: value => dispatch(onChangeIsIncoming(value)),
    })
)(InputRadio);

export const MappedInputStringFund = connect(
    state => ({
        value: state[NAMESPACE].related.fund.filter,
        allowEdit: state[NAMESPACE].uiux.allowEdit,
    }),
    dispatch => ({
        onChange: value => dispatch(onChangeFund(value)),
        onFocus: () => dispatch(onFocusFund()),
        onBlur: () => dispatch(onBlurFund()),
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

// --- --- --- --- --- --- --- --- ---
// Buttons
// --- --- --- --- --- --- --- --- ---

export const MappedButtonRequestFund = connect(
    (state, {hostArgs}) => ({
        allowRequest: state[NAMESPACE].uiux.allowEdit,
        auth: state.auth,
        data: state[NAMESPACE].related.fund.filter,
        isLoading: state[NAMESPACE].uiux.isLoading,
    }),
    (dispatch, {hostArgs}) => ({
        onRequest: (auth, data) => dispatch(onRequestProcess(NAMESPACE, HOST_ARGS.RETRIEVE_FUNDS, auth, data, onSuccessRelatedFund)),
    })
)(ButtonRequestRelated);

// --- --- --- --- --- --- --- --- ---
// List
// --- --- --- --- --- --- --- --- ---

export const MappedRelatedFundList = connect(
    state => ({
        items: state[NAMESPACE].related.fund.items,
    }),
    dispatch => ({
        onSelect: id => dispatch(onSelectRelated(NAMESPACE, id)),
    })

)(RelatedList);
