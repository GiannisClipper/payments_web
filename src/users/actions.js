/*import { request } from '../core/lib.js';

import { onSignin } from '../root/actions.js';

import {
    onBeforeRequest,
    onRespondData,
    onRespondErrors,
    onAfterResponse } 
from '../core/actions.js';
*/
/*
export const onVerifyCreate = (globals, uiux, data) => {
    return dispatch => {
        dispatch(onBeforeRequest(uiux));
        dispatch(
            async () => {
                await request(`${globals.origin}/users/signup/`, 'POST', '', {user: data},
                    (status, data) => {
                        alert('onsuccess' + data);
                        dispatch(onSignin(data.user, data.token));
                        dispatch(onAfterResponse(uiux));
                    },
                    (status, message) => {
                        alert('onfail' + message);
                        dispatch(onAfterResponse(uiux));
                    }        
                );
            }
        );
    };
}

export const onVerifyRetrieve = (globals, uiux, data) => {
    return dispatch => {
        dispatch(onBeforeRequest(uiux));
        dispatch(
            async () => {
                await request(`${globals.origin}/users/signin/`, 'POST', '', {user: data},
                    (status, data) => {
                        alert('onsuccess' + data);
                        dispatch(onSignin(data.user, data.token));
                        dispatch(onAfterResponse(uiux));
                    },
                    (status, message) => {
                        alert('onfail' + message);
                        dispatch(onAfterResponse(uiux));
                    }        
                );
            }
        );
    };
}
*/

import {
    CHANGE_USERNAME,
    CHANGE_PASSWORD,
    CHANGE_PASSWORD2,
    CHANGE_EMAIL,

    SIGNIN,
    SIGNOUT,
} from './constants.js';

// --- --- --- --- --- --- --- --- ---

export const onChangeUsername = (namespace, username) => {
    return {
        type: `${namespace}/${CHANGE_USERNAME}`,
		payload: {username},
    }
}

export const onChangePassword = (namespace, password) => {
    return {
        type: `${namespace}/${CHANGE_PASSWORD}`,
		payload: {password},
    }
}

export const onChangePassword2 = (namespace, password2) => {
    return {
        type: `${namespace}/${CHANGE_PASSWORD2}`,
		payload: {password2},
    }
}

export const onChangeEmail = (namespace, email) => {
    return {
        type: `${namespace}/${CHANGE_EMAIL}`,
		payload: {email},
    }
}

// --- --- --- --- --- --- --- --- ---

export const onSignin = (namespace, user, tokenKey) => {
    return {
        type: `${namespace}/${SIGNIN}`,
		payload: {user, tokenKey},
    }
}

export const onSignout = namespace => {
    return {
        type: `${namespace}/${SIGNOUT}`,
		payload: {},
    }
}
