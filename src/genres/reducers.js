import deepCopy from '../core/libs/deepcopy.js';

import { NAMESPACE, ACTIONS } from './constants.js';

import {
	initState,
} from '../core/reducers.js';

import {
	initFundRelated,
} from '../related/reducers.js';

import {
	relatedReducer,
} from '../related/reducers.js';


// --- --- --- --- --- --- --- --- ---

const initData = {
	id: '',
	code: '',
	name: '',
	is_incoming: null,
	fund: {
		id: '',
		code: '', 
		name: '',
	},
};

const initRelated = {
	fund: deepCopy(initFundRelated),
};

export const genresReducer = (state=initState(initData, initRelated), action) => {
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
			stateCopy.data.is_incoming =
				stateCopy.data.is_incoming !== action.payload.is_incoming
					?action.payload.is_incoming
					:null;

			stateCopy.uiux.allowRequest = true;
			return stateCopy;

		default:
			return relatedReducer(NAMESPACE, state, action)
    };
}
