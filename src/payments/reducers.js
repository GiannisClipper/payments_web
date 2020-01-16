import deepCopy from '../core/libs/deepcopy.js';

import { NAMESPACE, ACTIONS } from './constants.js';

import {
	initialState,
} from '../core/reducers.js';

import {
    initialFundRelated,
	initialGenreRelated,
} from '../related/reducers.js';

import {
	relatedReducer,
} from '../related/reducers.js';


// --- --- --- --- --- --- --- --- ---

const initialData = {
	id: '',
	date: '',
	genre: {
		id: '',
		code: '', 
		name: '',
	},
	incoming: '',
	outgoing: '',
	remarks: '',
	fund: {
		id: '',
		code: '', 
		name: '',
	},
};

const initialRelated = {
	fund: deepCopy(initialFundRelated),
	genre: deepCopy(initialGenreRelated),
};

export const paymentsReducer = (state=initialState(initialData, initialRelated), action) => {
	let stateCopy;

    switch (action.type) {
        case `${NAMESPACE}/${ACTIONS.CHANGE_DATE}`:
        	stateCopy = {...state};
	        stateCopy.data.date = action.payload.date;
			stateCopy.uiux.allowRequest = true;
            return stateCopy;

        case `${NAMESPACE}/${ACTIONS.CHANGE_INCOMING}`:
            stateCopy = {...state};
            stateCopy.data.incoming = action.payload.incoming;
            stateCopy.uiux.allowRequest = true;
            return stateCopy;

        case `${NAMESPACE}/${ACTIONS.CHANGE_OUTGOING}`:
            stateCopy = {...state};
            stateCopy.data.outgoing = action.payload.outgoing;
            stateCopy.uiux.allowRequest = true;
            return stateCopy;
   
        case `${NAMESPACE}/${ACTIONS.CHANGE_REMARKS}`:
        	stateCopy = {...state};
			stateCopy.data.remarks = action.payload.remarks;
			stateCopy.uiux.allowRequest = true;
            return stateCopy;

		default:
			return relatedReducer(NAMESPACE, state, action)
    };
}
