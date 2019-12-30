import {
    SELECT_CREATE,
    SELECT_RETRIEVE,
    SELECT_UPDATE,
    SELECT_DELETE,

    SUCCESS_CREATE,
    SUCCESS_RETRIEVE,
    SUCCESS_UPDATE,
    SUCCESS_DELETE,

    CLOSE_DATA,
    CLOSE_FORM,
    GO_HOME,

    BEFORE_REQUEST,
    AFTER_RESPONSE,
    DATA_RESPONSE,
    ERRORS_RESPONSE,
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

export const onRequestProcess = (namespace, hostArgs, auth, data, onSuccess) => {
    return dispatch => {
        dispatch(onBeforeRequest(namespace));
        dispatch(
            async () => {
                // Enclose `data` in `jsonKey`-namespace
                if (hostArgs.jsonKey)
                    data = {[hostArgs.jsonKey]: data}

                let response = await request(hostArgs.url, hostArgs.method, auth?auth.token:null, data);

                data = response.data;
                console.log('data1', data);
                if (response.status >= 200 && response.status <= 299) {
                    // Rename `jsonKey` to a generic namespace
                    if (hostArgs.jsonKey && data[hostArgs.jsonKey] !== undefined) {
                        data.data = data[hostArgs.jsonKey];
                        delete data[hostArgs.jsonKey];
                    };

                    ////alert('onsuccess' + data);
                    dispatch(onAfterResponse(namespace));
                    dispatch(onDataResponse(namespace));
                    dispatch(onSuccess(namespace, data));

                } else {
                    // Rename `jsonKey` to a generic namespace
                    if (hostArgs.jsonKey && data[hostArgs.jsonKey] !== undefined) {
                        data.errors = data[hostArgs.jsonKey];
                        delete data[hostArgs.jsonKey];
                    };

                    ////alert('onfail' + data);
                    dispatch(onAfterResponse(namespace));
                    dispatch(onErrorsResponse(namespace, data));
                };
                console.log('data2', data);
                //dispatch(onTest(namespace));
            }
        );
    };
};

// --- --- --- --- --- --- --- --- ---

export const onSuccessCreate = (namespace, data) => {
    return {
        type: `${namespace}/${SUCCESS_CREATE}`,
        payload: {...data},
    };
}

export const onSuccessRetrieve = (namespace, data) => {
    return {
        type: `${namespace}/${SUCCESS_RETRIEVE}`,
        payload: {...data},
    };
}

export const onSuccessUpdate = (namespace, data) => {
    return {
        type: `${namespace}/${SUCCESS_UPDATE}`,
        payload: {...data},
    }
}

export const onSuccessDelete = (namespace, data) => {
    return {
        type: `${namespace}/${SUCCESS_DELETE}`,
        payload: {...data},
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

export const onAfterResponse = namespace => {
    return {
        type: `${namespace}/${AFTER_RESPONSE}`,
        payload: {},
    }
}

export const onDataResponse = (namespace, data) => {
    return {
        type: `${namespace}/${DATA_RESPONSE}`,
        payload: {data},
    };
}

export const onErrorsResponse = (namespace, errors) => {
    return {
        type: `${namespace}/${ERRORS_RESPONSE}`,
        payload: errors,
    };
}
