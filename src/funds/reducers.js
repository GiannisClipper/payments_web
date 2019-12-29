import { 
	CHANGE_CODE,
	CHANGE_NAME,
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

const initialErrors = {
	code: '', 
	name: '',
};

export const fundsReducer = (state=initialState(initialData, initialErrors), action) => {
	const NAMESPACE = 'funds';
	let stateCopy;

    switch (action.type) {  
        case `${NAMESPACE}/${CHANGE_CODE}`:
        	stateCopy = {...state};
	        stateCopy.data.code = action.payload.code;
			stateCopy.uiux.allowSave = true;
            return stateCopy;
  
        case `${NAMESPACE}/${CHANGE_NAME}`:
        	stateCopy = {...state};
			stateCopy.data.name = action.payload.name;
			stateCopy.uiux.allowSave = true;
            return stateCopy;

		default:
			return baseFormReducer(NAMESPACE, state, action)
    };
};
