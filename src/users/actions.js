import { request } from '../core/lib.js';
import { beforeRequest, afterRequest } from '../core/actions.js';
import { onSignin } from '../root/actions.js';

import {
    CHANGE_USERNAME,
    CHANGE_PASSWORD,
    CHANGE_PASSWORD2,
    CHANGE_EMAIL,
} from './constants.js';


export const onVerifyCreate = (globals, uiux, data) => {
    return dispatch => {
        dispatch(beforeRequest(uiux));
        dispatch(
            async () => {
                await request(`${globals.origin}/users/signup/`, 'POST', '', {user: data},
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

export const onVerifyRetrieve = (globals, uiux, data) => {
    return dispatch => {
        dispatch(beforeRequest(uiux));
        dispatch(
            async () => {
                await request(`${globals.origin}/users/signin/`, 'POST', '', {user: data},
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

export const onChangeUsername = (uiux, id, username) => {
    return {
        uiux: uiux,
        type: CHANGE_USERNAME,
		payload: {id, username},
    }
}

export const onChangePassword = (uiux, id, password) => {
    return {
        uiux: uiux,
        type: CHANGE_PASSWORD,
		payload: {id, password},
    }
}

export const onChangePassword2 = (uiux, id, password2) => {
    return {
        uiux: uiux,
        type: CHANGE_PASSWORD2,
		payload: {id, password2},
    }
}

export const onChangeEmail = (uiux, id, email) => {
    return {
        uiux: uiux,
        type: CHANGE_EMAIL,
		payload: {id, email},
    }
}
