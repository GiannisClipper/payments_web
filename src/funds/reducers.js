import { 
	CHANGE_CODE,
	CHANGE_NAME,
} from "./constants.js";

import {
	initialState,
	basicFormReducer,
} from '../core/reducers.js'

export const initialData = {
	id: null,
	code: 'Code...', 
	name: 'Name...',
}

const fundsReducer = (state=initialState(initialData), action) => {
	let stateCopy;

    switch (action.type) {  
        case CHANGE_CODE:
        	stateCopy = {...state};
	        stateCopy.data.code = action.payload.code;
			stateCopy.uiux.allowSave = true;
            return stateCopy;
  
        case CHANGE_NAME:
        	stateCopy = {...state};
			stateCopy.data.name = action.payload.name;
			stateCopy.uiux.allowSave = true;
            return stateCopy;

		default:
			return basicFormReducer(state, action)
    }
}

export default fundsReducer;
