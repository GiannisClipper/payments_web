import { connect } from 'react-redux';

import {
    InputString,
    InputNumber,
    InputDate,
    MessageInput,
} from '../../core/components/inputs.jsx';

import {
    onChangeDate,
    onChangeIncoming,
    onChangeOutgoing,
    onChangeRemarks,
} from '../actions.js';

import { NAMESPACE } from '../constants.js';

// --- --- --- --- --- --- --- --- ---

export const MappedInputDateDate = connect(
    state => ({
        value: state[NAMESPACE].data.date,
        allowEdit: state[NAMESPACE].uiux.allowEdit,
    }),
    dispatch => ({
        onChange: value => dispatch(onChangeDate(value)),
    })
)(InputDate);

export const MappedInputNumberIncoming = connect(
    state => ({
        value: state[NAMESPACE].data.incoming,
        allowEdit: state[NAMESPACE].uiux.allowEdit,
    }),
    dispatch => ({
        onChange: value => dispatch(onChangeIncoming(value)),
    })
)(InputNumber);

export const MappedInputNumberOutgoing = connect(
    state => ({
        value: state[NAMESPACE].data.outgoing,
        allowEdit: state[NAMESPACE].uiux.allowEdit,
    }),
    dispatch => ({
        onChange: value => dispatch(onChangeOutgoing(value)),
    })
)(InputNumber);

export const MappedInputStringRemarks = connect(
    state => ({
        value: state[NAMESPACE].data.remarks,
        allowEdit: state[NAMESPACE].uiux.allowEdit,
    }),
    dispatch => ({
        onChange: value => dispatch(onChangeRemarks(value)),
    })
)(InputString);

export const MappedMessageInputDate = connect(
    state => ({
        value: state[NAMESPACE].errors.date,
    }),
)(MessageInput);
