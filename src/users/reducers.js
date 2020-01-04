import { NAMESPACE } from './constants.js';

import { 
    CHANGE_USERNAME,
    CHANGE_PASSWORD,
    CHANGE_PASSWORD2,
    CHANGE_EMAIL,
} from './constants.js';

import {
	initialState,
	baseFormReducer,
} from '../core/reducers.js'

// --- --- --- --- --- --- --- --- ---

const initialData = {
	id: '',
    username: '',
	password: '', 
	password2: '', 
	email: '', 
};

export const usersReducer = (state=initialState(initialData), action) => {
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
    }
}
