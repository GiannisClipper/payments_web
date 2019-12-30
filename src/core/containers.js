import { connect } from 'react-redux';

import {
    InputId,
} from './components/inputs.jsx';

import {
    ButtonSelectCreate,
    ButtonSelectRetrieve,
    ButtonSelectUpdate,
    ButtonSelectDelete,

    ButtonRequestCreate,
    ButtonRequestRetrieve,
    ButtonRequestUpdate,
    ButtonRequestDelete,

    ButtonCloseData,
    ButtonCloseForm,
    ButtonGoHome,
} from './components/buttons.jsx';

import {
    onSelectCreate,
    onSelectRetrieve,
    onSelectUpdate,
    onSelectDelete,

    onRequestProcess,
    onSuccessCreate,
    onSuccessRetrieve,
    onSuccessUpdate,
    onSuccessDelete,

    onCloseData,
    onCloseForm,
    onGoHome,
} from './actions.js';

// --- --- --- --- --- --- --- --- ---
// Inputs
// --- --- --- --- --- --- --- --- ---

export const MappedInputId = connect(
    (state, {namespace}) => ({
        value: state[namespace].data.id,
    }),
)(InputId);

// --- --- --- --- --- --- --- --- ---
// Buttons to select
// --- --- --- --- --- --- --- --- ---

export const MappedButtonSelectCreate = connect(
    state => ({}),
    (dispatch, {namespace}) => ({
        onSelect: () => dispatch(onSelectCreate(namespace)),
    })
)(ButtonSelectCreate);

export const MappedButtonSelectRetrieve = connect(
    state => ({}),
    (dispatch, {namespace}) => ({
        onSelect: () => dispatch(onSelectRetrieve(namespace)),
    })
)(ButtonSelectRetrieve);

export const MappedButtonSelectUpdate = connect(
    state => ({}),
    (dispatch, {namespace}) => ({
        onSelect: id => dispatch(onSelectUpdate(namespace, id)),
    })
)(ButtonSelectUpdate);

export const MappedButtonSelectDelete = connect(
    state => ({}),
    (dispatch, {namespace}) => ({
        onSelect: id => dispatch(onSelectDelete(namespace, id)),
    })
)(ButtonSelectDelete);

// --- --- --- --- --- --- --- --- ---
// Buttons to request
// --- --- --- --- --- --- --- --- ---

export const MappedButtonRequestCreate = connect(
    (state, {namespace, hostArgs}) => ({
        auth: state.auth,
        data: state[namespace].data,
        allowRequest: state[namespace].uiux.allowRequest,
        isLoading: state[namespace].uiux.isLoading,
    }),
    (dispatch, {namespace, hostArgs}) => ({
        onRequest: (auth, data) => dispatch(onRequestProcess(namespace, hostArgs, auth, data, onSuccessCreate)),
    })
)(ButtonRequestCreate);

export const MappedButtonRequestRetrieve = connect(
    (state, {namespace, hostArgs}) => ({
        auth: state.auth,
        data: state[namespace].data,
        isLoading: state[namespace].uiux.isLoading,
    }),
    (dispatch, {namespace, hostArgs}) => ({
        onRequest: (auth, data) => dispatch(onSuccessRetrieve(namespace, hostArgs, auth, data)),
    })
)(ButtonRequestRetrieve);

export const MappedButtonRequestUpdate = connect(
    (state, {namespace}) => ({
        auth: state.auth,
        data: state[namespace].data,
        allowRequest: state[namespace].uiux.allowRequest,
        isLoading: state[namespace].uiux.isLoading,
    }),
    (dispatch, {namespace}) => ({
        onRequest: (auth, data) => dispatch(onSuccessUpdate(namespace, auth, data)),
    })
)(ButtonRequestUpdate);

export const MappedButtonRequestDelete = connect(
    (state, {namespace}) => ({
        auth: state.auth,
        data: state[namespace].data,
        isLoading: state[namespace].uiux.isLoading,
    }),
    (dispatch, {namespace}) => ({
        onRequest: (auth, data) => dispatch(onSuccessDelete(namespace, auth, data)),
    })
)(ButtonRequestDelete);

// --- --- --- --- --- --- --- --- ---
// Buttons to close 
// --- --- --- --- --- --- --- --- ---

export const MappedButtonCloseData = connect(
    state => ({}),
    (dispatch, {namespace}) => ({
        onCloseData: () => dispatch(onCloseData(namespace)),
    })
)(ButtonCloseData);

export const MappedButtonCloseForm = connect(
    state => ({}),
    (dispatch, {namespace}) => ({
        onCloseForm: () => dispatch(onCloseForm(namespace)),
        onGoHome: history => dispatch(onGoHome(namespace, history)),
    })
)(ButtonCloseForm);

export const MappedButtonGoHome = connect(
    state => ({}),
    (dispatch, {namespace}) => ({
        onGoHome: history => dispatch(onGoHome(namespace, history)),
    })
)(ButtonGoHome);

// --- --- --- --- --- --- --- --- ---