import { NAMESPACE, ACTIONS } from './constants.js';

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
	fund: {
		id: '', 
		name: '',
	},
};

const initialRelated = {
	fund: {
		filter: '',
		filterCopy: '',
		items: {
			data: {}, 
			order: [],
		},
	}
};

export const genresReducer = (state=initialState(initialData, initialRelated), action) => {
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

		case `${NAMESPACE}/${ACTIONS.CHANGE_IS_INCOMING}`:
			stateCopy = {...state};
			stateCopy.data.is_incoming = action.payload.is_incoming=== 'true'?true:false;
			stateCopy.uiux.allowRequest = true;
			return stateCopy;

		case `${NAMESPACE}/${ACTIONS.CHANGE_FUND}`:
			stateCopy = {...state};
			stateCopy.related.fund.filter = action.payload.value;
			return stateCopy;

		case `${NAMESPACE}/${ACTIONS.FOCUS_FUND}`:
			stateCopy = {...state};
			stateCopy.related.fund.filter = stateCopy.related.fund.filterCopy;
			return stateCopy;
	
		case `${NAMESPACE}/${ACTIONS.BLUR_FUND}`:
			stateCopy = {...state};
			stateCopy.related.fund.filterCopy = stateCopy.related.fund.filter;
			stateCopy.related.fund.filter = `${stateCopy.data.fund.id} ${stateCopy.data.fund.name}`;
			return stateCopy;
		
		case `${NAMESPACE}/${ACTIONS.SUCCESS_RETRIEVE_FUNDS}`:
			stateCopy = {...state};
			stateCopy.related.fund.items.data = {};
			stateCopy.related.fund.items.order = [];
			action.payload.data.forEach(x => stateCopy.related.fund.items.data[x.id] = x);
			action.payload.data.forEach(x => stateCopy.related.fund.items.order.push(x.id));
			return stateCopy;

		default:
			return baseFormReducer(NAMESPACE, state, action)
    };
}
