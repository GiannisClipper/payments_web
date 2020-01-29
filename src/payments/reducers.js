import deepCopy from '../core/libs/deepcopy.js';

import { NAMESPACE, ACTIONS } from './constants.js';

import {
	initState,
} from '../core/reducers.js';

import {
    initFundRelated,
	initGenreRelated,
} from '../related/reducers.js';

import {
	relatedReducer,
} from '../related/reducers.js';


// --- --- --- --- --- --- --- --- ---

const initData = {
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

const initRelated = {
	fund: deepCopy(initFundRelated),
	genre: deepCopy(initGenreRelated),
};

export const paymentsReducer = (state=initState(initData, initRelated), action) => {
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
