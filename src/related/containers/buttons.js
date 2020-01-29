import { connect } from 'react-redux';

import { 
    ButtonRequestRelated,
    ButtonSelectDeleteRelated,
 } from '../../core/components/buttons.jsx';

import { RequestRelated } from '../../core/actions.js';

import { 
    onSuccessRelatedFund,
    onSuccessRelatedGenre,
    onSelectDeleteRelatedFund,
    onSelectDeleteRelatedGenre,
} from '../actions.js';

import { HOST_ARGS } from '../../root/constants.js';

// --- --- --- --- --- --- --- --- ---

export const MappedButtonRequestRelatedFund = connect(
    (state, {namespace}) => ({
        allowRequest: state[namespace].uiux.allowEdit,
        auth: state.auth,
        data: {name: state[namespace].related.fund.filterCopy},
        isLoading: state[namespace].uiux.related.isLoading,
    }),
    (dispatch, {namespace}) => ({
        onRequest: (auth, data) => dispatch(new RequestRelated().onRequest(namespace, HOST_ARGS.RETRIEVE_FUNDS, auth, data, onSuccessRelatedFund)),
    })
)(ButtonRequestRelated);

export const MappedButtonRequestRelatedGenre = connect(
    (state, {namespace}) => ({
        allowRequest: state[namespace].uiux.allowEdit,
        auth: state.auth,
        data: {name: state[namespace].related.genre.filterCopy},
        isLoading: state[namespace].uiux.related.isLoading,
    }),
    (dispatch, {namespace}) => ({
        onRequest: (auth, data) => dispatch(new RequestRelated().onRequest(namespace, HOST_ARGS.RETRIEVE_GENRES, auth, data, onSuccessRelatedGenre)),
    })
)(ButtonRequestRelated);

export const MappedButtonSelectDeleteRelatedFund = connect(
    state => ({}),
    (dispatch, {namespace}) => ({
        onSelect: () => dispatch(onSelectDeleteRelatedFund(namespace)),
    })
)(ButtonSelectDeleteRelated);

export const MappedButtonSelectDeleteRelatedGenre = connect(
    state => ({}),
    (dispatch, {namespace}) => ({
        onSelect: () => dispatch(onSelectDeleteRelatedGenre(namespace)),
    })
)(ButtonSelectDeleteRelated);
