import { connect } from 'react-redux';

import {
    InputId,
} from './components/inputs.jsx';

import {
    ButtonSelectCreate,
    ButtonSelectRetrieve,
    ButtonSelectUpdate,
    ButtonSelectDelete,

    ButtonVerifyCreate,
    ButtonVerifyRetrieve,
    ButtonVerifyUpdate,
    ButtonVerifyDelete,

    ButtonCloseData,
    ButtonCloseForm,
    ButtonGoHome,
} from './components/buttons.jsx';

import {
    onSelectCreate,
    onSelectRetrieve,
    onSelectUpdate,
    onSelectDelete,

    onVerifyCreate,
    onVerifyRetrieve,
    onVerifyUpdate,
    onVerifyDelete,

    onCloseData,
    onCloseForm,
    onGoHome,
} from './actions.js';

// --- --- --- --- --- --- --- --- ---

export const MappedInputId = connect(
    (state, {namespace}) => ({
        value: state[namespace].data.id,
    }),
)(InputId);

// --- --- --- --- --- --- --- --- ---

export const MappedButtonSelectCreate = connect(
    state => ({}),
    (dispatch, {namespace}) => ({
        onSelectCreate: () => dispatch(onSelectCreate(namespace)),
    })
)(ButtonSelectCreate);

export const MappedButtonSelectRetrieve = connect(
    state => ({}),
    (dispatch, {namespace}) => ({
        onSelectRetrieve: () => dispatch(onSelectRetrieve(namespace)),
    })
)(ButtonSelectRetrieve);

export const MappedButtonSelectUpdate = connect(
    state => ({}),
    (dispatch, {namespace}) => ({
        onSelectUpdate: id => dispatch(onSelectUpdate(namespace, id)),
    })
)(ButtonSelectUpdate);

export const MappedButtonSelectDelete = connect(
    state => ({}),
    (dispatch, {namespace}) => ({
        onSelectDelete: id => dispatch(onSelectDelete(namespace, id)),
    })
)(ButtonSelectDelete);

// --- --- --- --- --- --- --- --- ---

export const MappedButtonVerifyCreate = connect(
    (state, {namespace, hostArgs}) => ({
        auth: state.auth,
        data: state[namespace].data,
        allowSave: state[namespace].uiux.allowSave,
        isLoading: state[namespace].uiux.isLoading,
    }),
    (dispatch, {namespace, hostArgs}) => ({
        onVerifyCreate: (auth, data) => dispatch(onVerifyCreate(namespace, hostArgs, auth, data)),
    })
)(ButtonVerifyCreate);

export const MappedButtonVerifyRetrieve = connect(
    (state, {namespace, hostArgs}) => ({
        auth: state.auth,
        data: state[namespace].data,
        isLoading: state[namespace].uiux.isLoading,
    }),
    (dispatch, {namespace, hostArgs}) => ({
        onVerifyRetrieve: (auth, data) => dispatch(onVerifyRetrieve(namespace, hostArgs, auth, data)),
    })
)(ButtonVerifyRetrieve);

export const MappedButtonVerifyUpdate = connect(
    (state, {namespace}) => ({
        auth: state.auth,
        data: state[namespace].data,
        allowSave: state[namespace].uiux.allowSave,
        isLoading: state[namespace].uiux.isLoading,
    }),
    (dispatch, {namespace}) => ({
        onVerifyUpdate: (auth, data) => dispatch(onVerifyUpdate(namespace, auth, data)),
    })
)(ButtonVerifyUpdate);

export const MappedButtonVerifyDelete = connect(
    (state, {namespace}) => ({
        auth: state.auth,
        data: state[namespace].data,
        isLoading: state[namespace].uiux.isLoading,
    }),
    (dispatch, {namespace}) => ({
        onVerifyDelete: (auth, data) => dispatch(onVerifyDelete(namespace, auth, data)),
    })
)(ButtonVerifyDelete);

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
