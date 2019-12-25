import {
    SIGNIN,
    SIGNOUT,
} from './constants.js';


export const onSignin = (user, tokenKey) => {
    return {
        type: SIGNIN,
		payload: {user, tokenKey},
    }
}

export const onSignout = () => {
    return {
        type: SIGNOUT,
		payload: {},
    }
}
