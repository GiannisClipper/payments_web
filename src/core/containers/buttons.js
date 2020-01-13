import { connect } from 'react-redux';

import {
    ButtonSelectCreate,
    ButtonSelectRetrieve,
    ButtonSelectUpdate,
    ButtonSelectDelete,

    ButtonRequestCreate,
    ButtonRequestRetrieve,
    ButtonRequestUpdate,
    ButtonRequestDelete,

    ButtonGoHome,
    ButtonCloseForm,
    ButtonCloseMode,
    ButtonCloseRelated,
} from '../components/buttons.jsx';

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

    onGoHome,
    onCloseForm,
    onCloseMode,
    onCloseRelated,
} from '../actions.js';

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
    (dispatch, {namespace, id}) => ({
        onSelect: () => dispatch(onSelectUpdate(namespace, id)),
    })
)(ButtonSelectUpdate);

export const MappedButtonSelectDelete = connect(
    state => ({}),
    (dispatch, {namespace, id}) => ({
        onSelect: () => dispatch(onSelectDelete(namespace, id)),
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
        onRequest: (auth, data) => dispatch(onRequestProcess(namespace, hostArgs, auth, data, onSuccessRetrieve)),
    })
)(ButtonRequestRetrieve);

const onlyChangedData = (oldData, newData) => {  // Because backend triggers duplication errors when resending same field values 
    let retval = {...newData};
    Object.keys(retval).forEach(x => (x !== 'id' && oldData[x] === newData[x])?delete retval[x]:null);
    return retval;
};

export const MappedButtonRequestUpdate = connect(
    (state, {namespace}) => ({
        auth: state.auth,
        data: onlyChangedData(state[namespace].items.data[state[namespace].data.id], state[namespace].data),
        allowRequest: state[namespace].uiux.allowRequest,
        isLoading: state[namespace].uiux.isLoading,
    }),
    (dispatch, {namespace, hostArgs}) => ({
        onRequest: (auth, data) => dispatch(onRequestProcess(namespace, hostArgs, auth, data, onSuccessUpdate)),
    })
)(ButtonRequestUpdate);

export const MappedButtonRequestDelete = connect(
    (state, {namespace}) => ({
        auth: state.auth,
        data: state[namespace].data,
        isLoading: state[namespace].uiux.isLoading,
    }),
    (dispatch, {namespace, hostArgs}) => ({
        onRequest: (auth, data) => dispatch(onRequestProcess(namespace, hostArgs, auth, data, onSuccessDelete)),
    })
)(ButtonRequestDelete);

// --- --- --- --- --- --- --- --- ---
// Buttons to close 
// --- --- --- --- --- --- --- --- ---

export const MappedButtonGoHome = connect(
    state => ({}),
    (dispatch, {namespace}) => ({
        onGoHome: history => dispatch(onGoHome(namespace, history)),
    })
)(ButtonGoHome);

export const MappedButtonCloseForm = connect(
    state => ({}),
    (dispatch, {namespace}) => ({
        onClose: () => dispatch(onCloseForm(namespace)),
        onGoHome: history => dispatch(onGoHome(namespace, history)),
    })
)(ButtonCloseForm);

export const MappedButtonCloseMode = connect(
    state => ({}),
    (dispatch, {namespace}) => ({
        onClose: () => dispatch(onCloseMode(namespace)),
    })
)(ButtonCloseMode);

export const MappedButtonCloseRelated = connect(
    state => ({}),
    (dispatch, {namespace}) => ({
        onClose: () => dispatch(onCloseRelated(namespace)),
    })
)(ButtonCloseRelated);
