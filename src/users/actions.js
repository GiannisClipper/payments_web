import { NAMESPACE, ACTIONS } from './constants.js';

// --- --- --- --- --- --- --- --- ---

export const onChangeUsername = username => {
    return {
        type: `${NAMESPACE}/${ACTIONS.CHANGE_USERNAME}`,
		payload: {username},
    }
}

export const onChangePassword = password => {
    return {
        type: `${NAMESPACE}/${ACTIONS.CHANGE_PASSWORD}`,
		payload: {password},
    }
}

export const onChangePassword2 = password2 => {
    return {
        type: `${NAMESPACE}/${ACTIONS.CHANGE_PASSWORD2}`,
		payload: {password2},
    }
}

export const onChangeEmail = email => {
    return {
        type: `${NAMESPACE}/${ACTIONS.CHANGE_EMAIL}`,
		payload: {email},
    }
}
