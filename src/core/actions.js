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
    RESPOND_DATA,
    RESPOND_ERRORS,
    AFTER_RESPONSE,
} from './constants.js';

import { request } from '../core/lib.js';

// --- --- --- --- --- --- --- --- ---

export const onSelectCreate = namespace => {
    return {
        type: `${namespace}/${SELECT_CREATE}`,
        payload: {},
    };
}

export const onSelectRetrieve = namespace => {
    return {
        type: `${namespace}/${SELECT_RETRIEVE}`,
        payload: {},
    };
}

export const onSelectUpdate = (namespace, id) => {
    return {
        type: `${namespace}/${SELECT_UPDATE}`,
        payload: {id},
    };
}

export const onSelectDelete = (namespace, id) => {
    return {
        type: `${namespace}/${SELECT_DELETE}`,
        payload: {id},
    }
}

export const onCloseForm = namespace => {
    return {
        type: `${namespace}/${CLOSE_FORM}`,
        payload: {},
    };
}

export const onGoHome = (namespace, history) => {
    return {
        type: `${namespace}/${GO_HOME}`,
        payload: {history},
    }
}

// --- --- --- --- --- --- --- --- ---

export const onVerifyCreate = (namespace, hostArgs, auth, data) => {
    return dispatch => {
        dispatch(onBeforeRequest(namespace));
        dispatch(
            async () => {
                await request(hostArgs, auth.token, data,
                    (status, data) => {
                        alert('onsuccess' + data);
                        dispatch(onRespondData(data));
                        dispatch(onAfterResponse(namespace));
                    },
                    (status, message) => {
                        alert('onfail' + message);
                        dispatch(onAfterResponse(namespace));
                        dispatch(onRespondErrors(namespace, message));
                    }        
                );
            }
        );
    };
};

export const onVerifyRetrieve = (namespace, hostArgs, auth, data) => {
    return dispatch => {
        dispatch(onBeforeRequest(namespace));
        dispatch(
            async () => {
                await request(hostArgs, auth.token, data,
                    (status, data) => {
                        alert('onsuccess' + data);
                        dispatch(onRespondData(data));
                        //dispatch(onSignin(data.user, data.token));
                        dispatch(onAfterResponse(namespace));
                    },
                    (status, message) => {
                        alert('onfail' + message);
                        dispatch(onAfterResponse(namespace));
                        dispatch(onRespondErrors(namespace, message));
                    }        
                );
            }
        );
    };
};

export const onVerifyUpdate = (namespace, id) => {
    return {
        type: `${namespace}/${VERIFY_UPDATE}`,
        payload: {id},
    };
}

export const onVerifyDelete = (namespace, id) => {
    return {
        type: `${namespace}/${VERIFY_DELETE}`,
        payload: {id},
    }
}

export const onCloseData = namespace => {
    return {
        type: `${namespace}/${CLOSE_DATA}`,
        payload: {},
    };
}

// --- --- --- --- --- --- --- --- ---

export const onBeforeRequest = namespace => {
    return {
        type: `${namespace}/${BEFORE_REQUEST}`,
        payload: {},
    };
}

export const onRespondData = (namespace, data) => {
    return {
        type: `${namespace}/${RESPOND_DATA}`,
        payload: {data},
    };
}

export const onRespondErrors = (namespace, errors) => {
    return {
        type: `${namespace}/${RESPOND_ERRORS}`,
        payload: {errors},
    };
}

export const onAfterResponse = namespace => {
    return {
        type: `${namespace}/${AFTER_RESPONSE}`,
        payload: {},
    }
}
