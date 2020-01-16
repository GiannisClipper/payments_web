import { connect } from 'react-redux';

import {
    InputString,
    InputRadio,
    MessageInput,
} from '../../core/components/inputs.jsx';

import {
	onChangeCode,
    onChangeName,
    onChangeIsIncoming,
} from '../actions.js';

import { NAMESPACE, LABELS } from '../constants.js';

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
