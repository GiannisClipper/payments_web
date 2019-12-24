import {
    SIGNIN,
} from './constants.js';


export const onSignin = (user, tokenKey) => {
    return {
        type: SIGNIN,
		payload: {user, tokenKey},
    }
}
