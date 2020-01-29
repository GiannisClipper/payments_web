import { ACTIONS } from './constants.js';

import deepCopy from './libs/deepcopy.js';

// --- --- --- --- --- --- --- --- ---

const initUiux = {
	mode: null,
	allowRequest: null,
	allowEdit: null,
	isLoading: null,
	related: {
		namespace: null,
		allowRequest: null,
		isLoading: null,
	},
};

const initData = {};

const initRelated = {};

export const initState = (initData, initRelated={}) => {
	return {
		init: {
			uiux: deepCopy(initUiux),
			data: deepCopy(initData),
			related: deepCopy(initRelated),
		},

		uiux: deepCopy(initUiux),
		data: deepCopy(initData),
		related: deepCopy(initRelated),
		errors: {},

		items: {
			data: {}, 
			order: [],
		},
	};
};

export const baseFormReducer = (namespace, state=initState(initData, initRelated), action) => {
	let stateCopy;
	let rel = {
		namespace: null,
		data: null,
		keys: null,
		reprKeys: null,
	};

	const reprRelated = () => {
		for (rel.namespace of Object.keys(stateCopy.related)) {
			rel.reprKeys = stateCopy.related[rel.namespace].items.reprKeys;
			rel.data = stateCopy.data[rel.namespace];
			stateCopy.related[rel.namespace].filter = rel.reprKeys.map(k => rel.data[k]).join(' ');
		};
	}

	console.log('actiotn.type>>>', action.type);
    switch (action.type) {
        case `${namespace}/${ACTIONS.SELECT_CREATE}`:
        	stateCopy = {...state};
			stateCopy.uiux.mode = 'CREATE';
			stateCopy.uiux.allowEdit = true;
			stateCopy.uiux.allowRequest = false;
			return stateCopy;

		case `${namespace}/${ACTIONS.SELECT_RETRIEVE}`:
			stateCopy = {...state};
			stateCopy.uiux.mode = 'RETRIEVE';
			stateCopy.uiux.allowEdit = true;
			stateCopy.uiux.allowRequest = false;
			return stateCopy;

		case `${namespace}/${ACTIONS.SELECT_UPDATE}`:
			stateCopy = {...state};
			Object.keys(stateCopy.items.data[action.payload.id]).forEach(k => 
				stateCopy.items.data[action.payload.id][k] === null?delete stateCopy.items.data[action.payload.id][k]:null
			);  // Cause null values in object keys overwrite object stuctures

			stateCopy.data = {...stateCopy.init.data, ...stateCopy.items.data[action.payload.id]};
			reprRelated();

			stateCopy.uiux.mode = 'UPDATE';
			stateCopy.uiux.allowEdit = true;
			stateCopy.uiux.allowRequest = false;
			return stateCopy;
	
		case `${namespace}/${ACTIONS.SELECT_DELETE}`:
			stateCopy = {...state};
			stateCopy.data = {...stateCopy.init.data, ...stateCopy.items.data[action.payload.id]};
			reprRelated();

			stateCopy.uiux.mode = 'DELETE';
			stateCopy.uiux.allowEdit = false;
			stateCopy.uiux.allowRequest = true;
			return stateCopy;

		case `${namespace}/${ACTIONS.SELECT_RELATED}`:
			stateCopy = {...state};
			rel.namespace = stateCopy.uiux.related.namespace;
			rel.data = stateCopy.related[rel.namespace].items.data[action.payload.id];
			rel.keys = Object.keys(stateCopy.data[rel.namespace]);
			rel.reprKeys = stateCopy.related[rel.namespace].items.reprKeys;

			stateCopy.data[rel.namespace] = deepCopy(stateCopy.data[rel.namespace]);  // Distinguish from init object
			rel.keys.forEach(k => stateCopy.data[rel.namespace][k] = rel.data[k]);
			stateCopy.related[rel.namespace].filter = rel.reprKeys.map(k => rel.data[k]).join(' ');
			stateCopy.uiux.related.namespace = null;
			stateCopy.uiux.allowRequest = true;
			stateCopy.uiux.allowEdit = true;
			return stateCopy;
	
		case `${namespace}/${ACTIONS.SELECT_DELETE_RELATED}`:
			stateCopy = {...state};
			rel.namespace = action.payload.related.namespace;
			rel.keys = Object.keys(stateCopy.data[rel.namespace]);

			rel.keys.forEach(k => stateCopy.data[rel.namespace][k] = stateCopy.init.data[rel.namespace][k]);
			stateCopy.related[rel.namespace].filter = '';
			return stateCopy;

		case `${namespace}/${ACTIONS.SUCCESS_CREATE}`:
			stateCopy = {...state};
			stateCopy.items.data[action.payload.data.id] = {...action.payload.data};
			stateCopy.items.order = stateCopy.items.order.concat(action.payload.data.id);
			stateCopy.data = {...stateCopy.init.data};
			stateCopy.uiux.mode = null;
			return stateCopy;
	
		case `${namespace}/${ACTIONS.SUCCESS_RETRIEVE}`:
			stateCopy = {...state};
			stateCopy.items.data = {};
			stateCopy.items.order = [];
			action.payload.data.forEach(x => stateCopy.items.data[x.id] = x);
			action.payload.data.forEach(x => stateCopy.items.order.push(x.id));
			stateCopy.uiux.mode = null;
			return stateCopy;

        case `${namespace}/${ACTIONS.SUCCESS_UPDATE}`:
        	stateCopy = {...state};
			stateCopy.data = {...action.payload.data};
			stateCopy.items.data[action.payload.data.id] = {...stateCopy.data};
			return stateCopy;
  
	    case `${namespace}/${ACTIONS.SUCCESS_DELETE}`:
			stateCopy = {...state};
			console.log(action.payload);
			let orderPos = stateCopy.items.order.indexOf(action.payload.id);
			stateCopy.items.order.splice(orderPos, 1);
			delete stateCopy.items.data[action.payload.id];
			stateCopy.data = {...stateCopy.init.data};
			stateCopy.uiux.mode = null;
			return stateCopy;

		case `${namespace}/${ACTIONS.SUCCESS_RELATED}`:
			stateCopy = {...state};
			rel.namespace = action.payload.related.namespace;

			stateCopy.related[rel.namespace].items.data = {};
			stateCopy.related[rel.namespace].items.order = [];
			action.payload.data.forEach(x => stateCopy.related[rel.namespace].items.data[x.id] = x);
			action.payload.data.forEach(x => stateCopy.related[rel.namespace].items.order.push(x.id));
			stateCopy.uiux.related.namespace = rel.namespace;
			stateCopy.uiux.allowRequest = false;
			stateCopy.uiux.allowEdit = false;
			return stateCopy;

		case `${namespace}/${ACTIONS.GO_HOME}`:
			action.payload.history.push('/')
			return state;
	
		case `${namespace}/${ACTIONS.CLOSE_FORM}`:
			stateCopy = {...state};
			stateCopy.uiux = deepCopy(stateCopy.init.uiux);
			stateCopy.data = deepCopy(stateCopy.init.data);
			stateCopy.related = deepCopy(stateCopy.init.related);
			stateCopy.errors = {};
			stateCopy.items.data = {};
			stateCopy.items.order = [];
			console.log('items>>>', stateCopy.items);
			return stateCopy;

		case `${namespace}/${ACTIONS.CLOSE_MODE}`:
			stateCopy = {...state};
			stateCopy.uiux = deepCopy(stateCopy.init.uiux);
			stateCopy.data = deepCopy(stateCopy.init.data);
			stateCopy.related = deepCopy(stateCopy.init.related);
			stateCopy.errors = {};
			return stateCopy;

		case `${namespace}/${ACTIONS.CLOSE_RELATED}`:
			stateCopy = {...state};
			stateCopy.related = deepCopy(stateCopy.init.related);
			reprRelated();

			stateCopy.uiux.related.namespace = null;
			stateCopy.uiux.allowRequest = true;
			stateCopy.uiux.allowEdit = true;
			return stateCopy;

		case `${namespace}/${ACTIONS.BEFORE_REQUEST}`:
			stateCopy = {...state};
			stateCopy.uiux.allowEdit = false;
			stateCopy.uiux.allowRequest = false;
			stateCopy.uiux.isLoading = true;
			return stateCopy;

		case `${namespace}/${ACTIONS.BEFORE_REQUEST_RELATED}`:
			stateCopy = {...state};
			stateCopy.uiux.allowEdit = false;
			stateCopy.uiux.allowRequest = false;
			stateCopy.uiux.related.allowRequest = false;
			stateCopy.uiux.related.isLoading = true;
			return stateCopy;

		case `${namespace}/${ACTIONS.AFTER_RESPONSE}`:
			stateCopy = {...state};
			stateCopy.uiux.allowEdit = true;
			stateCopy.uiux.isLoading = false;
			return stateCopy;

		case `${namespace}/${ACTIONS.AFTER_RESPONSE_RELATED}`:
			stateCopy = {...state};
			stateCopy.uiux.allowEdit = true;
			stateCopy.uiux.related.isLoading = false;
			return stateCopy;
		
		case `${namespace}/${ACTIONS.DATA_RESPONSE}`:
			stateCopy = {...state};
			stateCopy.errors = {};
			return stateCopy;

		case `${namespace}/${ACTIONS.ERRORS_RESPONSE}`:
			stateCopy = {...state};

			// Place non field errors in an `errors` key
			if (typeof(action.payload) === 'string')
				action.payload = {'errors': {'errors': action.payload}};
			else if (typeof(action.payload.errors) === 'string')
				action.payload.errors = {'errors': action.payload.errors};
			else {
				let nonFieldErrors = [];
				const fieldKeys = Object.keys(stateCopy.data);
				Object.keys(action.payload.errors).forEach(x => !fieldKeys.includes(x)?nonFieldErrors.push(action.payload.errors[x]):null);
				Object.keys(action.payload.errors).forEach(x => !fieldKeys.includes(x)?delete action.payload.errors[x]:null);
				action.payload.errors['errors'] = nonFieldErrors;
			};

			stateCopy.errors = {...action.payload.errors};
			return stateCopy;
	
		default:
	        return state;
    };
}
 