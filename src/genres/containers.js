import { connect } from 'react-redux';

import { NAMESPACE } from './constants.js';

import { HOST_ARGS } from '../root/constants.js';

import { GenresForm } from './components/forms.jsx';

import { 
    RelatedFundList,
    GroupInputs,
    GroupItems,
} from './components/groups.jsx';

import {
    InputString,
    MessageInput,
} from '../core/components/inputs.jsx';

import { InputRadioIsIncoming } from './components/inputs.jsx';

import { ButtonRequestFund } from './components/buttons.jsx';

import {
	onChangeCode,
    onChangeName,
    onChangeIsIncoming,
    onChangeFund,
    onFocusFund,
    onBlurFund,
    onSuccessRetrieveFund,
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
        allowRelatedFundList: state[NAMESPACE].related.fund.allowList,
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

export const MappedInputStringFund = connect(
    state => ({
        value: state[NAMESPACE].related.fund.filter, //(x => x?`${x.id} ${x.name}`:'')(state[NAMESPACE].data.fund),
        allowEdit: state[NAMESPACE].uiux.allowEdit,
    }),
    dispatch => ({
        onChange: value => dispatch(onChangeFund(value)),
        onFocus: () => dispatch(onFocusFund()),
        onBlur: () => dispatch(onBlurFund()),
    })
)(InputString);

export const MappedButtonRequestFund = connect(
    (state, {namespace, hostArgs}) => ({
        allowRequest: state[NAMESPACE].uiux.allowEdit,
        auth: state.auth,
        data: state[NAMESPACE].data.fund,
        isLoading: state[NAMESPACE].uiux.isLoading,
    }),
    (dispatch, {namespace, hostArgs}) => ({
        onRequest: (auth, data) => dispatch(onRequestProcess(NAMESPACE, HOST_ARGS.RETRIEVE_FUNDS, auth, data, onSuccessRetrieveFund)),
    })
)(ButtonRequestFund);

export const MappedRelatedFundList = connect(
    state => ({
        items: state[NAMESPACE].related.fund.items,
    }),
)(RelatedFundList);

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
