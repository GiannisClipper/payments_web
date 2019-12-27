import { 
	CHANGE_CODE,
	CHANGE_NAME,
} from "./constants.js";

import {
	initialState,
	baseFormReducer,
} from '../core/reducers.js'

export const initialData = {
	id: null,
	code: 'Code...', 
	name: 'Name...',
}

const fundsReducer = (state=initialState({form: 'funds'}, initialData), action) => {
	let stateCopy;

    if (!action.uiux || action.uiux.form !== 'funds')
        return state

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
			return baseFormReducer(state, action)
    }
}

export default fundsReducer;
