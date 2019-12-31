import {
    SELECT_CREATE,
    SELECT_RETRIEVE,
    SELECT_UPDATE,
    SELECT_DELETE,

    BEFORE_REQUEST,
    AFTER_RESPONSE,
    DATA_RESPONSE,
    ERRORS_RESPONSE,

    SUCCESS_CREATE,
    SUCCESS_RETRIEVE,
    SUCCESS_UPDATE,
    SUCCESS_DELETE,

    CLOSE_MODE,
    CLOSE_FORM,
    GO_HOME,
} from './constants.js';

import { request } from '../core/lib.js';

// --- --- --- --- --- --- --- --- ---
// onSelect...
// --- --- --- --- --- --- --- --- ---

export const onSelectCreate = namespace => {
    return {
        type: `${namespace}/${SELECT_CREATE}`,
        payload: {},
    };
};

export const onSelectRetrieve = namespace => {
    return {
        type: `${namespace}/${SELECT_RETRIEVE}`,
        payload: {},
    };
};

export const onSelectUpdate = (namespace, id) => {
    return {
        type: `${namespace}/${SELECT_UPDATE}`,
        payload: {id},
    };
};

export const onSelectDelete = (namespace, id) => {
    return {
        type: `${namespace}/${SELECT_DELETE}`,
        payload: {id},
    };
};

// --- --- --- --- --- --- --- --- ---
// onRequest...
// --- --- --- --- --- --- --- --- ---

export const onRequestProcess = (namespace, hostArgs, auth, data, onSuccess) => {
    return dispatch => {
        dispatch(onBeforeRequest(namespace));
        dispatch(
            async () => {
                const id = data.id;

                // Replace `id` in url if demanded
                if (hostArgs.url.includes('<:id>'))
                    hostArgs.url = hostArgs.url.replace('<:id>', id);

                // Place data in `reqDataKey`-namespace
                if (hostArgs.reqDataKey)
                    data = {[hostArgs.reqDataKey]: data}

                let response = await request(hostArgs.url, hostArgs.method, auth?auth.token:null, data);

                data = response.data;
                console.log('Response data with `resDataKey`)>>>', data);

                if (response.status >= 200 && response.status <= 299) {
                    // Rename `resDataKey`-namespace to a generic one
                    if (hostArgs.resDataKey && data[hostArgs.resDataKey] !== undefined) {
                        data.data = data[hostArgs.resDataKey];
                        delete data[hostArgs.resDataKey];
                    };
                    console.log('Response data without `resDataKey`)>>>', data);

                    dispatch(onAfterResponse(namespace));
                    dispatch(onDataResponse(namespace));
                    dispatch(onSuccess(namespace, data, id));

                } else {
                    // Rename `resDataKey`-namespace to a generic one
                    if (hostArgs.resDataKey && data[hostArgs.resDataKey] !== undefined) {
                        data.errors = data[hostArgs.resDataKey];
                        delete data[hostArgs.resDataKey];
                    };
                    console.log('Response data without `resDataKey`)>>>', data);

                    dispatch(onAfterResponse(namespace));
                    dispatch(onErrorsResponse(namespace, data));
                };
            }
        );
    };
};

export const onBeforeRequest = namespace => {
    return {
        type: `${namespace}/${BEFORE_REQUEST}`,
        payload: {},
    };
};

export const onAfterResponse = namespace => {
    return {
        type: `${namespace}/${AFTER_RESPONSE}`,
        payload: {},
    };
};

export const onDataResponse = (namespace, data) => {
    return {
        type: `${namespace}/${DATA_RESPONSE}`,
        payload: {data},
    };
};

export const onErrorsResponse = (namespace, errors) => {
    return {
        type: `${namespace}/${ERRORS_RESPONSE}`,
        payload: errors,
    };
};

// --- --- --- --- --- --- --- --- ---
// onSuccess...
// --- --- --- --- --- --- --- --- ---

export const onSuccessCreate = (namespace, data) => {
    return {
        type: `${namespace}/${SUCCESS_CREATE}`,
        payload: {...data},
    };
};

export const onSuccessRetrieve = (namespace, data) => {
    return {
        type: `${namespace}/${SUCCESS_RETRIEVE}`,
        payload: {...data},
    };
};

export const onSuccessUpdate = (namespace, data) => {
    return {
        type: `${namespace}/${SUCCESS_UPDATE}`,
        payload: {...data},
    };
};

export const onSuccessDelete = (namespace, data, id) => {
    data.data = {id};  // Because backend sends an empty data object in delete operation
    return {
        type: `${namespace}/${SUCCESS_DELETE}`,
        payload: {...data},
    };
};

// --- --- --- --- --- --- --- --- ---
// onClose...
// --- --- --- --- --- --- --- --- ---

export const onCloseData = namespace => {
    return {
        type: `${namespace}/${CLOSE_MODE}`,
        payload: {},
    };
};

export const onCloseForm = namespace => {
    return {
        type: `${namespace}/${CLOSE_FORM}`,
        payload: {},
    };
};

export const onGoHome = (namespace, history) => {
    return {
        type: `${namespace}/${GO_HOME}`,
        payload: {history},
    };
};
