import { TOKEN_PREFIX } from '../root/constants.js';

import { 
    CHANGE_USERNAME,
    CHANGE_PASSWORD,
    CHANGE_PASSWORD2,
    CHANGE_EMAIL,

    SUCCESS_SIGNIN,
    SUCCESS_SIGNOUT,
} from './constants.js';

import {
	initialState,
	baseFormReducer,
} from '../core/reducers.js'

// --- --- --- --- --- --- --- --- ---

const initialData = {
	id: '',
    username: 'Username...',
	password: 'Password...', 
	password2: 'Password2...', 
	email: 'Email...', 
};

export const usersReducer = (state=initialState(initialData), action) => {
    const NAMESPACE = 'users';
    let stateCopy;

    switch (action.type) {
        case `${NAMESPACE}/${CHANGE_USERNAME}`:
        	stateCopy = {...state};
			stateCopy.data.username = action.payload.username;
			stateCopy.uiux.allowRequest = true;
            return stateCopy;

        case `${NAMESPACE}/${CHANGE_PASSWORD}`:
            stateCopy = {...state};
            stateCopy.data.password = action.payload.password;
            stateCopy.uiux.allowRequest = true;
            return stateCopy;
      
        case `${NAMESPACE}/${CHANGE_PASSWORD2}`:
            stateCopy = {...state};
            stateCopy.data.password2 = action.payload.password2;
            stateCopy.uiux.allowRequest = true;
            return stateCopy;
          
        case `${NAMESPACE}/${CHANGE_EMAIL}`:
            stateCopy = {...state};
            stateCopy.data.email = action.payload.email;
            stateCopy.uiux.allowRequest = true;
            return stateCopy;
        
		default:
			return baseFormReducer(NAMESPACE, state, action)
    };
};

// --- --- --- --- --- --- --- --- ---

let tokenKey = '';
let user = {};

try {tokenKey = localStorage.getItem('tokenKey')} catch {};
try {user = JSON.parse(localStorage.getItem('user'))} catch {};

const initialAuth = {
    token: {prefix: TOKEN_PREFIX, key: tokenKey},
    user: {...user},
};

export const authReducer = (state=initialAuth, action) => {
    const NAMESPACE = 'users';
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

            if (localStorage.getItem('tokenKey', null))
                localStorage.removeItem('tokenKey');
            if (localStorage.getItem('user', null))
                localStorage.removeItem('user');

            return stateCopy;

        default:
	        return state;
    };
};