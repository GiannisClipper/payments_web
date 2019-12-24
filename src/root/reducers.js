import usersReducer from "../users/reducers.js";
import fundsReducer from "../funds/reducers.js";

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

        default:
	        return state;
    }
}

//import { combineReducers } from "redux";
//const rootReducer = combineReducers({
//  fundsReducer,
//  ...
//});

const rootReducer = (state, action) => { 
    return {
        globals: globalsReducer((state === undefined)?undefined:state.globals, action),
        users: usersReducer((state === undefined)?undefined:state.users, action),
        funds: fundsReducer((state === undefined)?undefined:state.funds, action),
    }
}

export default rootReducer;