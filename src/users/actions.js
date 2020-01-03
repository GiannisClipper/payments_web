import {
    CHANGE_USERNAME,
    CHANGE_PASSWORD,
    CHANGE_PASSWORD2,
    CHANGE_EMAIL,
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
