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
	const namespace = 'funds';
	let stateCopy;

    switch (action.type) {  
        case `${namespace}/${CHANGE_CODE}`:
        	stateCopy = {...state};
	        stateCopy.data.code = action.payload.code;
			stateCopy.uiux.allowSave = true;
            return stateCopy;
  
        case `${namespace}/${CHANGE_NAME}`:
        	stateCopy = {...state};
			stateCopy.data.name = action.payload.name;
			stateCopy.uiux.allowSave = true;
            return stateCopy;

		default:
			return baseFormReducer(namespace, state, action)
    };
};
