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

export const onRequestProcess = (namespace, hostArgs, auth, data, onVerify) => {
    return dispatch => {
        dispatch(onBeforeRequest(namespace));
        dispatch(
            async () => {
                // Enclose `data` in `jsonKey`-namespace
                if (hostArgs.jsonKey)
                    data = {[hostArgs.jsonKey]: data}

                let response = await request(hostArgs.url, hostArgs.method, auth.token, data);

                data = response.data;
                console.log('data1', data);
                if (response.status >= 200 && response.status <= 299) {
                    // Rename `jsonKey` to a generic namespace
                    if (hostArgs.jsonKey && data[hostArgs.jsonKey] !== undefined)
                        data.data = data[hostArgs.jsonKey];
                        delete data[hostArgs.jsonKey];

                    alert('onsuccess' + data);
                    dispatch(onAfterResponse(namespace));
                    dispatch(onDataResponse(namespace));
                    if (onVerify)
                        dispatch(onVerify(namespace, data));

                } else {
                    // Rename `jsonKey` to a generic namespace
                    if (hostArgs.jsonKey && data[hostArgs.jsonKey] !== undefined)
                        data.errors = data[hostArgs.jsonKey];
                        delete data[hostArgs.jsonKey];

                    alert('onfail' + data);
                    dispatch(onAfterResponse(namespace));
                    dispatch(onErrorsResponse(namespace, data));
                };
                console.log('data2', data);
                //dispatch(onTest(namespace));
            }
        );
    };
};

/*export const onVerifyCreate = (namespace, hostArgs, auth, data) => {
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
                dispatch(onTest(namespace));
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
                        dispatch(onDataResponse(data));
                        //dispatch(onSignin(data.user, data.token));
                        dispatch(onAfterResponse(namespace));
                    },
                    (status, message) => {
                        alert('onfail' + message);
                        dispatch(onAfterResponse(namespace));
                        dispatch(onErrorsResponse(namespace, message));
                    }        
                );
            }
        );
    };
};
*/

// --- --- --- --- --- --- --- --- ---

export const onVerifyCreate = namespace => {
    return {
        type: `${namespace}/${VERIFY_CREATE}`,
        payload: {},
    };
}

export const onVerifyRetrieve = namespace => {
    return {
        type: `${namespace}/${VERIFY_RETRIEVE}`,
        payload: {},
    };
}

export const onVerifyUpdate = (namespace, id) => {
    return {
        type: `${namespace}/${VERIFY_UPDATE}`,
        payload: {id},
    }
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
        payload: {errors},
    };
}
