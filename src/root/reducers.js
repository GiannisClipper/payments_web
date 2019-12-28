import { usersReducer, authReducer } from '../users/reducers.js';
import { fundsReducer } from '../funds/reducers.js';

const rootReducer = (state, action) => {
    return {
        users: usersReducer((state === undefined)?undefined:state.users, action),
        auth: authReducer((state === undefined)?undefined:state.auth, action),
        funds: fundsReducer((state === undefined)?undefined:state.funds, action),
    }
}

export default rootReducer;

/*
const initialState = {
    origin: 'http://localhost:8000',
    token: {prefix: 'Token', key: localStorage.getItem('tokenKey')},
	user: JSON.parse(localStorage.getItem('user')),
}

const globalsReducer = (state=initialState, action) => {
	let stateCopy;

    switch (action.type) {
        case 'SIGNIN':
        	stateCopy = {...state};
			stateCopy.user = {
                id: action.payload.user.id,
                username: action.payload.user.username,
            };
            stateCopy.token.key = action.payload.tokenKey;
            
            localStorage.setItem('user', JSON.stringify(stateCopy.user));
            localStorage.setItem('tokenKey', stateCopy.token.key);

            return stateCopy;

        case 'SIGNOUT':
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
    }
}
*/
