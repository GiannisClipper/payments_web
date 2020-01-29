import { NAMESPACE } from './constants.js';

import { ACTIONS } from './constants.js';

import {
	initState,
	baseFormReducer,
} from '../core/reducers.js'

// --- --- --- --- --- --- --- --- ---

const initData = {
	id: '',
    username: '',
	password: '', 
	password2: '', 
	email: '', 
};

export const usersReducer = (state=initState(initData), action) => {
    let stateCopy;

    switch (action.type) {
        case `${NAMESPACE}/${ACTIONS.CHANGE_USERNAME}`:
        	stateCopy = {...state};
			stateCopy.data.username = action.payload.username;
			stateCopy.uiux.allowRequest = true;
            return stateCopy;

        case `${NAMESPACE}/${ACTIONS.CHANGE_PASSWORD}`:
            stateCopy = {...state};
            stateCopy.data.password = action.payload.password;
            stateCopy.uiux.allowRequest = true;
            return stateCopy;
      
        case `${NAMESPACE}/${ACTIONS.CHANGE_PASSWORD2}`:
            stateCopy = {...state};
            stateCopy.data.password2 = action.payload.password2;
            stateCopy.uiux.allowRequest = true;
            return stateCopy;
          
        case `${NAMESPACE}/${ACTIONS.CHANGE_EMAIL}`:
            stateCopy = {...state};
            stateCopy.data.email = action.payload.email;
            stateCopy.uiux.allowRequest = true;
            return stateCopy;
        
		default:
			return baseFormReducer(NAMESPACE, state, action)
    }
}
