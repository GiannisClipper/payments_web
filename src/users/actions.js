import { request } from '../core/lib.js';
import { beforeRequest, afterRequest } from '../core/actions.js';
import { onSignin } from '../root/actions.js';

import {
    CHANGE_USERNAME,
    CHANGE_PASSWORD,
    CHANGE_PASSWORD2,
    CHANGE_EMAIL,
} from './constants.js';


export const onVerifyCreate = (globals, data) => {
    return dispatch => {
        dispatch(beforeRequest(null));
        dispatch(
            async () => {
                await request(`${globals.origin}/users/signup/`, 'POST', '', {user: data},
                    (status, data) => {
                        alert('onsuccess' + data);
                        dispatch(onSignin(data.user, data.token));
                        dispatch(afterRequest(null));
                    },
                    (status, message) => {
                        alert('onfail' + message);
                        dispatch(afterRequest(null));
                    }        
                );
            }
        );
    };
}

export const onVerifyRetrieve = (globals, data) => {
    return dispatch => {
        dispatch(beforeRequest(null));
        dispatch(
            async () => {
                await request(`${globals.origin}/users/signin/`, 'POST', '', {user: data},
                    (status, data) => {
                        alert('onsuccess' + data);
                        dispatch(onSignin(data.user, data.token));
                        dispatch(afterRequest(null));
                    },
                    (status, message) => {
                        alert('onfail' + message);
                        dispatch(afterRequest(null));
                    }        
                );
            }
        );
    };
}

export const onChangeUsername = (id, username) => {
    return {
        type: CHANGE_USERNAME,
		payload: {id, username},
    }
}

export const onChangePassword = (id, password) => {
    return {
        type: CHANGE_PASSWORD,
		payload: {id, password},
    }
}

export const onChangePassword2 = (id, password2) => {
    return {
        type: CHANGE_PASSWORD2,
		payload: {id, password2},
    }
}

export const onChangeEmail = (id, email) => {
    return {
        type: CHANGE_EMAIL,
		payload: {id, email},
    }
}
