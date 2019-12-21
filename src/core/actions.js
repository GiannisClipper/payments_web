import {
    SELECT_CREATE,
    VERIFY_CREATE,

    SELECT_RETRIEVE,
    VERIFY_RETRIEVE,

    SELECT_UPDATE,
    VERIFY_UPDATE,

    SELECT_DELETE,
    VERIFY_DELETE,

    EXIT,

    BEFORE_REQUEST,
    AFTER_REQUEST,

} from './constants.js';


export const onSelectCreate = () => {
    return {
        type: SELECT_CREATE,
        payload: {},
    };
}

export const onVerifyCreate = () => {
    return {
        type: VERIFY_CREATE,
        payload: {},
    };
}

export const onSelectRetrieve = () => {
    return {
        type: SELECT_RETRIEVE,
        payload: {},
    };
}

export const onVerifyRetrieve = () => {
    return {
        type: VERIFY_RETRIEVE,
        payload: {},
    };
}

export const onSelectUpdate = id => {
    return {
        type: SELECT_UPDATE,
        payload: {id},
    };
}

export const onVerifyUpdate = id => {
    return {
        type: VERIFY_UPDATE,
        payload: {id},
    };
}

export const onSelectDelete = id => {
    return {
        type: SELECT_DELETE,
        payload: {id},
    }
}

export const onVerifyDelete = id => {
    return {
        type: VERIFY_DELETE,
        payload: {id},
    }
}

export const onExit = (id, initialData) => {
    return {
        type: EXIT,
        payload: {id, initialData},
    };
}

export const beforeRequest = id => {
    return {
        type: BEFORE_REQUEST,
        payload: {id},
    };
}

export const afterRequest = id => {
    return {
        type: AFTER_REQUEST,
        payload: {id},
    }
}
