import {
    SELECT_CREATE,
    SELECT_RETRIEVE,
    SELECT_UPDATE,
    SELECT_DELETE,
    CLOSE_FORM,
    GO_HOME,

    VERIFY_CREATE,
    VERIFY_RETRIEVE,
    VERIFY_UPDATE,
    VERIFY_DELETE,
    CLOSE_DATA,

    BEFORE_REQUEST,
    AFTER_REQUEST,
} from './constants.js';


export const onSelectCreate = uiux => {
    return {
        uiux: uiux, 
        type: SELECT_CREATE,
        payload: {},
    };
}

export const onSelectRetrieve = uiux => {
    return {
        uiux: uiux, 
        type: SELECT_RETRIEVE,
        payload: {},
    };
}

export const onSelectUpdate = (uiux, id) => {
    return {
        uiux: uiux, 
        type: SELECT_UPDATE,
        payload: {id},
    };
}

export const onSelectDelete = (uiux, id) => {
    return {
        uiux: uiux, 
        type: SELECT_DELETE,
        payload: {id},
    }
}

export const onCloseForm = (uiux, initialData) => {
    return {
        uiux: uiux, 
        type: CLOSE_FORM,
        payload: {initialData},
    };
}

export const onGoHome = (uiux, history) => {
    return {
        uiux: uiux, 
        type: GO_HOME,
        payload: {history},
    }
}

export const onVerifyCreate = uiux => {
    return {
        uiux: uiux, 
        type: VERIFY_CREATE,
        payload: {},
    };
}

export const onVerifyRetrieve = uiux => {
    return {
        uiux: uiux, 
        type: VERIFY_RETRIEVE,
        payload: {},
    };
}

export const onVerifyUpdate = (uiux, id) => {
    return {
        uiux: uiux, 
        type: VERIFY_UPDATE,
        payload: {id},
    };
}

export const onVerifyDelete = (uiux, id) => {
    return {
        uiux: uiux, 
        type: VERIFY_DELETE,
        payload: {id},
    }
}

export const onCloseData = (uiux, initialData) => {
    return {
        uiux: uiux,
        type: CLOSE_DATA,
        payload: {initialData},
    };
}

export const beforeRequest = uiux => {
    return {
        uiux: uiux,
        type: BEFORE_REQUEST,
        payload: {},
    };
}

export const afterRequest = uiux => {
    return {
        uiux: uiux,
        type: AFTER_REQUEST,
        payload: {},
    }
}
