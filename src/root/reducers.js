import usersReducer from "../users/reducers.js";
import fundsReducer from "../funds/reducers.js";

const initialState = {
    host: 'http://localhost:5000',
    token: {prefix: 'Token', key: null},
	user: [],
}

const globalsReducer = (state=initialState, action) => {
	let stateCopy;

    switch (action.type) {
        case 'SIGNIN':
        	stateCopy = {...state};
			stateCopy.globals.user = action.user;
			stateCopy.globals.token = action.token;
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