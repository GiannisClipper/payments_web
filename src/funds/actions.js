import { request } from '../core/lib.js';
import { beforeRequest, afterRequest } from '../core/actions.js';
import { onSignin } from '../root/actions.js';

import {
    CHANGE_CODE,
    CHANGE_NAME,
} from './constants.js';


export const onVerifyCreate = (globals, uiux, data) => {
    return dispatch => {
        dispatch(beforeRequest(uiux));
        dispatch(
            async () => {
                await request(`${globals.origin}/funds/`, 'POST', globals.token, {fund: data},
                    (status, data) => {
                        alert('onsuccess' + data);
                        //dispatch(onSignin(data.user, data.token));
                        dispatch(afterRequest(uiux));
                    },
                    (status, message) => {
                        alert('onfail' + message);
                        dispatch(afterRequest(uiux));
                    }        
                );
            }
        );
    };
}

export const onVerifyRetrieve = (globals, uiux, data) => {
    return dispatch => {
        dispatch(beforeRequest(uiux));
        dispatch(
            async () => {
                await request(`${globals.origin}/users/signin/`, 'POST', globals.token, {user: data},
                    (status, data) => {
                        alert('onsuccess' + data);
                        dispatch(onSignin(data.user, data.token));
                        dispatch(afterRequest(uiux));
                    },
                    (status, message) => {
                        alert('onfail' + message);
                        dispatch(afterRequest(uiux));
                    }        
                );
            }
        );
    };
}

export const onChangeCode = (uiux, id, code) => {
    return {
        uiux: uiux,
        type: CHANGE_CODE,
		payload: {id, code},
    }
}

export const onChangeName = (uiux, id, name) => {
    return {
        uiux: uiux,
        type: CHANGE_NAME,
		payload: {id, name},
    }
}
