import { connect } from 'react-redux';

import {
    InputString,
    MessageInput,
} from '../../core/components/inputs.jsx';

import {
	onChangeCode,
    onChangeName,
} from '../actions.js';

import { NAMESPACE } from '../constants.js';

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
