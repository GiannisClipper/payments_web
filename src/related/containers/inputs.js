import { connect } from 'react-redux';

import {
    InputString,
} from '../../core/components/inputs.jsx';

import {
    onChangeFund,
    onFocusFund,
    onBlurFund,

    onChangeGenre,
    onFocusGenre,
    onBlurGenre,
} from '../actions.js';

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
