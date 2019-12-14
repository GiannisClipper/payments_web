import usersReducer from "../users/reducers.js";
import fundsReducer from "../funds/reducers.js";

const initialState = {
    origin: 'http://localhost:3000',
	token: null,
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

export const rootReducer = (state, action) => { 
    return {
        globals: globalsReducer((state === undefined)?undefined:state.globals, action),
        users: usersReducer((state === undefined)?undefined:state.users, action),
        funds: fundsReducer((state === undefined)?undefined:state.funds, action),
    }
}

// export default rootReducer;