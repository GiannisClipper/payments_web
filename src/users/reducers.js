import { 
    CHANGE_USERNAME,
    CHANGE_PASSWORD,
    CHANGE_PASSWORD2,
    CHANGE_EMAIL,
} from './constants.js';

import {
	initialState,
	basicFormReducer,
} from '../core/reducers.js'


export const initialData = {
	id: null,
    username: 'Username...',
	password: 'Password...', 
	password2: 'Password2...', 
	email: 'Email...', 
}

const usersReducer = (state=initialState(initialData), action) => {
	let stateCopy;

    switch (action.type) {
        case CHANGE_USERNAME:
        	stateCopy = {...state};
			stateCopy.data.username = action.payload.username;
			stateCopy.uiux.allowSave = true;
            return stateCopy;

        case CHANGE_PASSWORD:
            stateCopy = {...state};
            stateCopy.data.password = action.payload.password;
            stateCopy.uiux.allowSave = true;
            return stateCopy;
      
        case CHANGE_PASSWORD2:
            stateCopy = {...state};
            stateCopy.data.password2 = action.payload.password2;
            stateCopy.uiux.allowSave = true;
            return stateCopy;
          
        case CHANGE_EMAIL:
            stateCopy = {...state};
            stateCopy.data.email = action.payload.email;
            stateCopy.uiux.allowSave = true;
            return stateCopy;
        
		default:
			return basicFormReducer(state, action)
	        //return state;
    }
}

export default usersReducer;
