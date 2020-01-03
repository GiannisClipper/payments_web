import {
    SUCCESS_SIGNIN,
    SUCCESS_SIGNOUT,
} from './constants.js';

import {
    onSuccessCreate,
} from '../core/actions.js';

// --- --- --- --- --- --- --- --- ---

export const onSignup = (namespace, data) => {
    return dispatch => {
        dispatch(onSuccessCreate(namespace, data));
        dispatch(onSignin(namespace, data));
    }
}

export const onSignin = (namespace, data) => {
    return {
        type: `${namespace}/${SUCCESS_SIGNIN}`,
		payload: {...data},
    }
}

export const onSignout = (namespace, message) => {
    return {
        type: `${namespace}/${SUCCESS_SIGNOUT}`,
		payload: {message},
    }
}
