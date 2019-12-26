import { request } from '../core/lib.js';
import { beforeRequest, afterRequest } from '../core/actions.js';
import { onSignin } from '../root/actions.js';

import {
    CHANGE_CODE,
    CHANGE_NAME,
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

export const onChangeCode = (id, code) => {
    return {
        type: CHANGE_CODE,
		payload: {id, code},
    }
}

export const onChangeName = (id, name) => {
    return {
        type: CHANGE_NAME,
		payload: {id, name},
    }
}
