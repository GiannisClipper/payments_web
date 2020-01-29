import deepCopy from '../core/libs/deepcopy.js';

import { ACTIONS } from './constants.js';

import {
	baseFormReducer,
} from '../core/reducers.js';

// --- --- --- --- --- --- --- --- ---

const initialRelated = {
	filter: '',
	filterCopy: '',
	items: {
		reprKeys: [],
		data: {}, 
		order: [],
	},
};

export const initialFundRelated = deepCopy(initialRelated);
initialFundRelated.items.reprKeys = ['code', 'name'];

export const initialGenreRelated = deepCopy(initialRelated);
initialGenreRelated.items.reprKeys = ['code', 'name'];

export const relatedReducer = (namespace, state, action) => {
	let stateCopy;

    switch (action.type) {
		case `${namespace}/${ACTIONS.CHANGE_FUND}`:
			stateCopy = {...state};
			stateCopy.related.fund.filter = action.payload.value;
			return stateCopy;

		case `${namespace}/${ACTIONS.FOCUS_FUND}`:
			stateCopy = {...state};
			stateCopy.related.fund.filter = stateCopy.related.fund.filterCopy;
			return stateCopy;

		case `${namespace}/${ACTIONS.BLUR_FUND}`:
			stateCopy = {...state};
			stateCopy.related.fund.filterCopy = stateCopy.related.fund.filter;
			stateCopy.related.fund.filter = stateCopy.related.fund.items.reprKeys.map(k => stateCopy.data.fund[k]).join(' ');
			return stateCopy;

		case `${namespace}/${ACTIONS.CHANGE_GENRE}`:
			stateCopy = {...state};
			stateCopy.related.genre.filter = action.payload.value;
			return stateCopy;

		case `${namespace}/${ACTIONS.FOCUS_GENRE}`:
			stateCopy = {...state};
			stateCopy.related.genre.filter = stateCopy.related.genre.filterCopy;
			return stateCopy;

		case `${namespace}/${ACTIONS.BLUR_GENRE}`:
			stateCopy = {...state};
			stateCopy.related.genre.filterCopy = stateCopy.related.genre.filter;
			stateCopy.related.genre.filter = stateCopy.related.genre.items.reprKeys.map(k => stateCopy.data.genre[k]).join(' ');
			return stateCopy;

		default:
			return baseFormReducer(namespace, state, action)
    };
}
