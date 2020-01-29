import deepCopy from '../core/libs/deepcopy.js';

import { ACTIONS } from './constants.js';

import {
	baseFormReducer,
} from '../core/reducers.js';

// --- --- --- --- --- --- --- --- ---

const initRelated = {
	filter: '',
	filterCopy: '',
	items: {
		reprKeys: [],
		data: {},
		order: [],
	},
};

export const initFundRelated = deepCopy(initRelated);
initFundRelated.items.reprKeys = ['code', 'name'];

export const initGenreRelated = deepCopy(initRelated);
initGenreRelated.items.reprKeys = ['code', 'name'];

export const relatedReducer = (namespace, state, action) => {
	let stateCopy;

    switch (action.type) {
		case `${namespace}/${ACTIONS.CHANGE_FUND}`:
			stateCopy = {...state};
			stateCopy.related.fund.filter = action.payload.value;
			stateCopy.related.fund.filterCopy = action.payload.value;
			return stateCopy;

		case `${namespace}/${ACTIONS.FOCUS_FUND}`:
			stateCopy = {...state};
			stateCopy.uiux.related.namespace = 'fund';
			stateCopy.related.fund.filter = stateCopy.related.fund.filterCopy;
			stateCopy.uiux.related.allowRequest = true;
			return stateCopy;

		case `${namespace}/${ACTIONS.BLUR_FUND}`:
			stateCopy = {...state};
			stateCopy.related.fund.filter = stateCopy.related.fund.items.reprKeys.map(k => stateCopy.data.fund[k]).join(' ');
			stateCopy.uiux.related.allowRequest = false;
			stateCopy.uiux.related.namespace = null;
			return stateCopy;

		case `${namespace}/${ACTIONS.CHANGE_GENRE}`:
			stateCopy = {...state};
			stateCopy.related.genre.filter = action.payload.value;
			stateCopy.related.genre.filterCopy = action.payload.value;
			return stateCopy;

		case `${namespace}/${ACTIONS.FOCUS_GENRE}`:
			stateCopy = {...state};
			stateCopy.uiux.related.namespace = 'genre';
			stateCopy.related.genre.filter = stateCopy.related.genre.filterCopy;
			stateCopy.uiux.related.allowRequest = true;
			return stateCopy;

		case `${namespace}/${ACTIONS.BLUR_GENRE}`:
			stateCopy = {...state};
			stateCopy.related.genre.filter = stateCopy.related.genre.items.reprKeys.map(k => stateCopy.data.genre[k]).join(' ');
			stateCopy.uiux.related.allowRequest = false;
			stateCopy.uiux.related.namespace = null;
			return stateCopy;

		default:
			return baseFormReducer(namespace, state, action)
    };
}
