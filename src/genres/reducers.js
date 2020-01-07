import { NAMESPACE, ACTIONS } from './constants.js';

import { FundsRelatedForm } from '../funds_related/components/forms.jsx';

import {
	initialState,
	baseFormReducer,
} from '../core/reducers.js';

// --- --- --- --- --- --- --- --- ---

const initialData = {
	id: '',
	code: '',
	name: '',
	is_incoming: false,
	fund: {id: '', name: ''},
};

export const genresReducer = (state=initialState(initialData), action) => {
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

		case `${NAMESPACE}/${ACTIONS.CHANGE_IS_INCOME}`:
			stateCopy = {...state};
			stateCopy.data.is_incoming = action.payload.is_incoming=== 'true'?true:false;
			stateCopy.uiux.allowRequest = true;
			return stateCopy;

		case `${NAMESPACE}/${ACTIONS.SELECT_RETRIEVE_FUND}`:
			stateCopy = {...state};
			stateCopy.uiux.popup = FundsRelatedForm;
			return stateCopy;

		default:
			return baseFormReducer(NAMESPACE, state, action)
    };
}
