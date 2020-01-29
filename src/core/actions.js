import { ACTIONS } from './constants.js';

import request from './libs/request.js';

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

export class Request {

    constructor() {
        this.onBeforeRequest = onBeforeRequest;
        this.onAfterResponse = onAfterResponse;
        this.onDataResponse = onDataResponse;
        this.onErrorsResponse = onErrorsResponse;
        this.onSignout = onSignout;
    }

    onRequest(namespace, hostArgs, auth, reqData, onSuccess) {

        let querystring;

        return dispatch => {
            dispatch(this.onBeforeRequest(namespace));
            dispatch(
                async () => {
                    const id = reqData.id;
                    hostArgs = {...hostArgs}

                    // Replace `id` in url if should be done
                    if (hostArgs.url.includes('<:id>'))
                        hostArgs.url = hostArgs.url.replace('<:id>', id);

                    // Create querystring when method is get
                    if (hostArgs.method.toUpperCase() === 'GET') {
                        Object.keys(reqData).forEach(x => reqData[x] === null?delete reqData[x]:null);
                        Object.keys(reqData).forEach(x => typeof reqData[x] === 'object'?reqData[x + '_id'] = reqData[x].id:null);
                        Object.keys(reqData).forEach(x => typeof reqData[x] === 'object'?delete reqData[x]:null);
                        querystring = Object.keys(reqData)
                            .filter(x => reqData[x] !== null && reqData[x] !== '')
                            .map(x => `filters=${x}:${reqData[x]}`)
                            .join('&');

                        hostArgs.url += querystring?('?'+querystring):'';
                    }

                    // Place data in `reqDataKey`-namespace
                    if (hostArgs.reqDataKey)
                        reqData = {[hostArgs.reqDataKey]: reqData};

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

                        dispatch(this.onAfterResponse(namespace));
                        dispatch(this.onDataResponse(namespace));
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

                        dispatch(this.onAfterResponse(namespace));
                        dispatch(this.onErrorsResponse(namespace, resData));

                        if ([401, 403].includes(response.status))
                            dispatch(this.onSignout('users', resData.errors.errors.toString()));

                    };
                }
            )
        }
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
