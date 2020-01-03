import { TOKEN_PREFIX } from '../root/constants.js';

import { NAMESPACE } from '../users/constants.js';

import {
    SUCCESS_SIGNIN,
    SUCCESS_SIGNOUT,
} from './constants.js';

// --- --- --- --- --- --- --- --- ---

let tokenKey = '';
let user = {};

try {tokenKey = localStorage.getItem('tokenKey')} catch {};
try {user = JSON.parse(localStorage.getItem('user'))} catch {};

const initialState = {
    token: {prefix: TOKEN_PREFIX, key: tokenKey},
    user: {...user},
    message: null,
};

export const authReducer = (state=initialState, action) => {
	let stateCopy;

    switch (action.type) {
        case `${NAMESPACE}/${SUCCESS_SIGNIN}`:
            console.log('sigin payload>>>', action.payload);
            stateCopy = {...state};
			stateCopy.user = {
                id: action.payload.data.id,
                username: action.payload.data.username,
            };
            stateCopy.token.key = action.payload.token;

            localStorage.setItem('user', JSON.stringify(stateCopy.user));
            localStorage.setItem('tokenKey', stateCopy.token.key);

            return stateCopy;

        case `${NAMESPACE}/${SUCCESS_SIGNOUT}`:
            stateCopy = {...state};
            stateCopy.token.key = null;
            if (stateCopy.user)
                stateCopy.user.id = null;

            stateCopy.message = action.payload.message;

            if (localStorage.getItem('tokenKey', null))
                localStorage.removeItem('tokenKey');
            if (localStorage.getItem('user', null))
                localStorage.removeItem('user');

            return stateCopy;

        default:
	        return state;
    }
}
