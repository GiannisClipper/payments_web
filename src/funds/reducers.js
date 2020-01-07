import { 
	NAMESPACE,
	ACTIONS,
} from "./constants.js";

import {
	initialState,
	baseFormReducer,
} from '../core/reducers.js'

// --- --- --- --- --- --- --- --- ---

const initialData = {
	id: '',
	code: '..', 
	name: '..',
};

export const fundsReducer = (state=initialState(initialData), action) => {
	let stateCopy;

    switch (action.type) {  
        case `${NAMESPACE}/${ACTIONS.CHANGE_CODE}`:
        	stateCopy = {...state};
	        stateCopy.data.code = action.payload.code;
			stateCopy.uiux.allowRequest = true;
            return stateCopy;
  
        case `${NAMESPACE}/${ACTIONS.CHANGE_NAME}`:
        	stateCopy = {...state};
			stateCopy.data.name = action.payload.name;
			stateCopy.uiux.allowRequest = true;
            return stateCopy;

		default:
			return baseFormReducer(NAMESPACE, state, action)
    }
}
