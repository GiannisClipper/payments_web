import { connect } from 'react-redux';

import { ButtonRequestRelated } from '../../core/components/buttons.jsx';

import { onRequestProcess } from '../../core/actions.js';

import { onSuccessRelatedFund } from '../actions.js';

import { NAMESPACE } from '../constants.js';

import { HOST_ARGS } from '../../root/constants.js';

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
