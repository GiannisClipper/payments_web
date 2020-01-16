import { connect } from 'react-redux';

import { ButtonRequestRelated } from '../../core/components/buttons.jsx';

import { onRequestProcess } from '../../core/actions.js';

import { 
    onSuccessRelatedFund,
    onSuccessRelatedGenre,
} from '../actions.js';

import { HOST_ARGS } from '../../root/constants.js';

// --- --- --- --- --- --- --- --- ---

export const MappedButtonRequestFund = connect(
    (state, {namespace}) => ({
        allowRequest: state[namespace].uiux.allowEdit,
        auth: state.auth,
        data: {name: state[namespace].related.fund.filterCopy},
        isLoading: state[namespace].uiux.isLoading,
    }),
    (dispatch, {namespace}) => ({
        onRequest: (auth, data) => dispatch(onRequestProcess(namespace, HOST_ARGS.RETRIEVE_FUNDS, auth, data, onSuccessRelatedFund)),
    })
)(ButtonRequestRelated);

export const MappedButtonRequestGenre = connect(
    (state, {namespace}) => ({
        allowRequest: state[namespace].uiux.allowEdit,
        auth: state.auth,
        data: {name: state[namespace].related.genre.filterCopy},
        isLoading: state[namespace].uiux.isLoading,
    }),
    (dispatch, {namespace}) => ({
        onRequest: (auth, data) => dispatch(onRequestProcess(namespace, HOST_ARGS.RETRIEVE_GENRES, auth, data, onSuccessRelatedGenre)),
    })
)(ButtonRequestRelated);
