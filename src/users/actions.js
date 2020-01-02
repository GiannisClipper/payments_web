import {
    CHANGE_USERNAME,
    CHANGE_PASSWORD,
    CHANGE_PASSWORD2,
    CHANGE_EMAIL,

    SUCCESS_SIGNIN,
    SUCCESS_SIGNOUT,
} from './constants.js';

import {
    onSuccessCreate,
} from '../core/actions.js';

// --- --- --- --- --- --- --- --- ---

export const onChangeUsername = (namespace, username) => {
    return {
        type: `${namespace}/${CHANGE_USERNAME}`,
		payload: {username},
    };
};

export const onChangePassword = (namespace, password) => {
    return {
        type: `${namespace}/${CHANGE_PASSWORD}`,
		payload: {password},
    };
};

export const onChangePassword2 = (namespace, password2) => {
    return {
        type: `${namespace}/${CHANGE_PASSWORD2}`,
		payload: {password2},
    };
};

export const onChangeEmail = (namespace, email) => {
    return {
        type: `${namespace}/${CHANGE_EMAIL}`,
		payload: {email},
    };
};

// --- --- --- --- --- --- --- --- ---

export const onSignup = (namespace, data) => {
    return dispatch => {
        dispatch(onSuccessCreate(namespace, data));
        dispatch(onSignin(namespace, data));
    };
};

export const onSignin = (namespace, data) => {
    return {
        type: `${namespace}/${SUCCESS_SIGNIN}`,
		payload: {...data},
    };
};

export const onSignout = (namespace, message) => {
    return {
        type: `${namespace}/${SUCCESS_SIGNOUT}`,
		payload: {message},
    };
};
