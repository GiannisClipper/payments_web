import { request } from '../core/lib.js';
import { beforeRequest, afterRequest } from '../core/actions.js';

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
                await request(`${globals.host}/users`, 'POST', globals.token, data,
                    (status, data) => {
                        alert(data);
                        dispatch(afterRequest(null));
                    },
                    (status, message) => {
                        alert(message);
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
		id,
		username
    }
}

export const onChangePassword = (id, password) => {
    return {
        type: CHANGE_PASSWORD,
		id,
		password
    }
}

export const onChangePassword2 = (id, password2) => {
    return {
        type: CHANGE_PASSWORD2,
		id,
		password2
    }
}

export const onChangeEmail = (id, email) => {
    return {
        type: CHANGE_EMAIL,
		id,
		email
    }
}
