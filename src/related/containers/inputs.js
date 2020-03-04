import { connect } from 'react-redux';

import {
    InputString,
    ToolInputRelated,
    MessageInput,
} from '../../core/components/inputs.jsx';

import {
    onChangeFund,
    onFocusFund,
    onBlurFund,
    onChangeGenre,
    onFocusGenre,
    onBlurGenre,
} from '../actions.js';

import {
    MappedButtonRequestRelatedFund,
    MappedButtonSelectDeleteRelatedFund,
    MappedButtonRequestRelatedGenre,
    MappedButtonSelectDeleteRelatedGenre
} from './buttons.js';

import { 
    MappedSectionRelatedFund,
    MappedSectionRelatedGenre,
} from './sections.js';

// --- --- --- --- --- --- --- --- ---

export const MappedInputStringFund = connect(
    (state, {namespace}) => ({
        value: state[namespace].related.fund.filter,
        allowEdit: state[namespace].uiux.allowEdit,
    }),
    (dispatch, {namespace}) => ({
        onChange: value => dispatch(onChangeFund(namespace, value)),
        onFocus: () => dispatch(onFocusFund(namespace)),
        onBlur: () => dispatch(onBlurFund(namespace)),
    })
)(InputString);

export const MappedInputStringGenre = connect(
    (state, {namespace}) => ({
        value: state[namespace].related.genre.filter,
        allowEdit: state[namespace].uiux.allowEdit,
    }),
    (dispatch, {namespace}) => ({
        onChange: value => dispatch(onChangeGenre(namespace, value)),
        onFocus: () => dispatch(onFocusGenre(namespace)),
        onBlur: () => dispatch(onBlurGenre(namespace)),
    })
)(InputString);

// --- --- --- --- --- --- --- --- ---

export const MappedToolInputFund = connect(
    (state, {namespace}) => ({
        namespace,
        related: {
            namespace: state[namespace].uiux.related.namespace === 'fund' ? 'fund' : null,
            allowRequest: state[namespace].uiux.related.allowRequest,
            id: state[namespace].data.fund.id,
        },
        MappedButtonRequestRelated: MappedButtonRequestRelatedFund,
        MappedSectionRelated: MappedSectionRelatedFund,
        MappedButtonSelectDeleteRelated: MappedButtonSelectDeleteRelatedFund
    }),
)(ToolInputRelated);

export const MappedToolInputGenre = connect(
    (state, {namespace}) => ({
        namespace,
        related: {
            namespace: state[namespace].uiux.related.namespace === 'genre' ? 'genre' : null,
            allowRequest: state[namespace].uiux.related.allowRequest,
            id: state[namespace].data.genre.id,
        },
        MappedButtonRequestRelated: MappedButtonRequestRelatedGenre,
        MappedSectionRelated: MappedSectionRelatedGenre,
        MappedButtonSelectDeleteRelated: MappedButtonSelectDeleteRelatedGenre
    }),
)(ToolInputRelated);

// --- --- --- --- --- --- --- --- ---

export const MappedMessageInputFund = connect(
    (state, {namespace}) => ({
        value: state[namespace].errors.fund,
    }),
)(MessageInput);

export const MappedMessageInputGenre = connect(
    (state, {namespace}) => ({
        value: state[namespace].errors.genre,
    }),
)(MessageInput);
