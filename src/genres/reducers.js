import {
	NAMESPACE,
	CHANGE_CODE,
	CHANGE_NAME,
	CHANGE_IS_INCOME,
} from "./constants.js";

import {
	initialState,
	baseFormReducer,
} from '../core/reducers.js';

// --- --- --- --- --- --- --- --- ---

const initialData = {
	id: '',
	code: '',
	name: 'G..',
	is_income: false,
};

export const genresReducer = (state=initialState(initialData), action) => {
	let stateCopy;

    switch (action.type) {  
        case `${NAMESPACE}/${CHANGE_CODE}`:
        	stateCopy = {...state};
	        stateCopy.data.code = action.payload.code;
			stateCopy.uiux.allowRequest = true;
            return stateCopy;
  
        case `${NAMESPACE}/${CHANGE_NAME}`:
        	stateCopy = {...state};
			stateCopy.data.name = action.payload.name;
			stateCopy.uiux.allowRequest = true;
            return stateCopy;

		case `${NAMESPACE}/${CHANGE_IS_INCOME}`:
			stateCopy = {...state};
			stateCopy.data.is_income = action.payload.is_income === 'true'?true:false;
			stateCopy.uiux.allowRequest = true;
			return stateCopy;
	
		default:
			return baseFormReducer(NAMESPACE, state, action)
    };
}
