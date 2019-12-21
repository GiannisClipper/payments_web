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
	let stateCopy, itemPointer;

    switch (action.type) {
        case CHANGE_USERNAME:
        	stateCopy = {...state};
			itemPointer = (action.id === null)?stateCopy.newItem:stateCopy.items[action.id];
			itemPointer.data.username = action.username;
			itemPointer.uiux.enableSave = true;
            return stateCopy;

        case CHANGE_PASSWORD:
            stateCopy = {...state};
            itemPointer = (action.id === null)?stateCopy.newItem:stateCopy.items[action.id];
            itemPointer.data.password = action.password;
            itemPointer.uiux.enableSave = true;
            return stateCopy;
      
        case CHANGE_PASSWORD2:
            stateCopy = {...state};
            itemPointer = (action.id === null)?stateCopy.newItem:stateCopy.items[action.id];
            itemPointer.data.password2 = action.password2;
            itemPointer.uiux.enableSave = true;
            return stateCopy;
          
        case CHANGE_EMAIL:
            stateCopy = {...state};
            itemPointer = (action.id === null)?stateCopy.newItem:stateCopy.items[action.id];
            itemPointer.data.email = action.email;
            itemPointer.uiux.enableSave = true;
            return stateCopy;
        
		default:
			return basicFormReducer(state, action)
	        //return state;
    }
}

export default usersReducer;
