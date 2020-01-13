import { ACTIONS } from './constants.js';

import { request } from '../core/lib.js';

import { onSignout } from '../auth/actions.js';

// --- --- --- --- --- --- --- --- ---
// onSelect...
// --- --- --- --- --- --- --- --- ---

export const onSelectCreate = namespace => {
    return {
        type: `${namespace}/${ACTIONS.SELECT_CREATE}`,
        payload: {},
    }
}

export const onSelectRetrieve = namespace => {
    return {
        type: `${namespace}/${ACTIONS.SELECT_RETRIEVE}`,
        payload: {},
    }
}

export const onSelectUpdate = (namespace, id) => {
    return {
        type: `${namespace}/${ACTIONS.SELECT_UPDATE}`,
        payload: {id},
    }
}

export const onSelectDelete = (namespace, id) => {
    return {
        type: `${namespace}/${ACTIONS.SELECT_DELETE}`,
        payload: {id},
    }
}

export const onSelectRelated = (namespace, id) => {
    return {
        type: `${namespace}/${ACTIONS.SELECT_RELATED}`,
        payload: {id},
    }
}

// --- --- --- --- --- --- --- --- ---
// onRequest...
// --- --- --- --- --- --- --- --- ---

export const onRequestProcess = (namespace, hostArgs, auth, reqData, onSuccess) => {
    return dispatch => {
        dispatch(onBeforeRequest(namespace));
        dispatch(
            async () => {
                const id = reqData.id;
                hostArgs = {...hostArgs}

                // Replace `id` in url if should be
                if (hostArgs.url.includes('<:id>'))
                    hostArgs.url = hostArgs.url.replace('<:id>', id);

                // Place data in `reqDataKey`-namespace
                if (hostArgs.reqDataKey)
                    reqData = {[hostArgs.reqDataKey]: reqData}

                let response = await request(hostArgs.url, hostArgs.method, auth?auth.token:null, reqData);

                let resData = response.data;
                console.log('Response data with `resDataKey`)>>>', resData);

                if (response.status >= 200 && response.status <= 299) {
                    // Rename `resDataKey`-namespace to a generic one
                    if (hostArgs.resDataKey && resData[hostArgs.resDataKey] !== undefined) {
                        resData.data = resData[hostArgs.resDataKey];
                        delete resData[hostArgs.resDataKey];
                    };
                    console.log('Response data without `resDataKey`)>>>', resData);

                    dispatch(onAfterResponse(namespace));
                    dispatch(onDataResponse(namespace));
                    if (onSuccess)
                        dispatch(onSuccess(namespace, resData, id));

                } else {
                    alert(response.status);
                    // Rename `resDataKey`-namespace to a generic one
                    if (hostArgs.resDataKey && resData[hostArgs.resDataKey] !== undefined) {
                        resData.errors = resData[hostArgs.resDataKey];
                        delete resData[hostArgs.resDataKey];
                    };
                    console.log('Response data without `resDataKey`)>>>', resData);

                    dispatch(onAfterResponse(namespace));
                    dispatch(onErrorsResponse(namespace, resData));

                    if ([401, 403].includes(response.status))
                        dispatch(onSignout('users', resData.errors.errors.toString()));

                };
            }
        )
    }
}

export const onBeforeRequest = namespace => {
    return {
        type: `${namespace}/${ACTIONS.BEFORE_REQUEST}`,
        payload: {},
    }
}

export const onAfterResponse = namespace => {
    return {
        type: `${namespace}/${ACTIONS.AFTER_RESPONSE}`,
        payload: {},
    }
}

export const onDataResponse = (namespace, data) => {
    return {
        type: `${namespace}/${ACTIONS.DATA_RESPONSE}`,
        payload: {data},
    }
}

export const onErrorsResponse = (namespace, errors) => {
    return {
        type: `${namespace}/${ACTIONS.ERRORS_RESPONSE}`,
        payload: errors,
    }
}

// --- --- --- --- --- --- --- --- ---
// onSuccess...
// --- --- --- --- --- --- --- --- ---

export const onSuccessCreate = (namespace, data) => {
    return {
        type: `${namespace}/${ACTIONS.SUCCESS_CREATE}`,
        payload: {...data},
    }
}

export const onSuccessRetrieve = (namespace, data) => {
    return {
        type: `${namespace}/${ACTIONS.SUCCESS_RETRIEVE}`,
        payload: {...data},
    }
}

export const onSuccessUpdate = (namespace, data) => {
    return {
        type: `${namespace}/${ACTIONS.SUCCESS_UPDATE}`,
        payload: {...data},
    }
}

export const onSuccessDelete = (namespace, data, id) => {
    data = {id};  // Because backend sends an empty data object in delete operation
    return {
        type: `${namespace}/${ACTIONS.SUCCESS_DELETE}`,
        payload: {...data},
    }
}

// --- --- --- --- --- --- --- --- ---
// onClose...
// --- --- --- --- --- --- --- --- ---

export const onGoHome = (namespace, history) => {
    return {
        type: `${namespace}/${ACTIONS.GO_HOME}`,
        payload: {history},
    }
}

export const onCloseForm = namespace => {
    return {
        type: `${namespace}/${ACTIONS.CLOSE_FORM}`,
        payload: {},
    }
}

export const onCloseMode = namespace => {
    return {
        type: `${namespace}/${ACTIONS.CLOSE_MODE}`,
        payload: {},
    }
}

export const onCloseRelated = namespace => {
    return {
        type: `${namespace}/${ACTIONS.CLOSE_RELATED}`,
        payload: {},
    }
}
