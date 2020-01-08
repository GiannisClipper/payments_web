import { ACTIONS } from './constants.js';

import { NAMESPACE } from '../users/constants.js';

import { onSuccessCreate } from '../core/actions.js';

// --- --- --- --- --- --- --- --- ---

export const onSignup = (namespace, data) => {  // onSuccess always returns namespace as 1st param
    return dispatch => {
        dispatch(onSuccessCreate(NAMESPACE, data));
        dispatch(onSignin(data));
    }
}

export const onSignin = (namespace, data) => {  // onSuccess always returns namespace as 1st param 
    return {
        type: `${NAMESPACE}/${ACTIONS.SUCCESS_SIGNIN}`,
		payload: {...data},
    }
}

export const onSignout = (auth, message) => {
    return {
        type: `${NAMESPACE}/${ACTIONS.SUCCESS_SIGNOUT}`,
		payload: {message},
    }
}
