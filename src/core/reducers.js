import { 
    SELECT_CREATE,
    SUCCESS_CREATE,

    SELECT_RETRIEVE,
    SUCCESS_RETRIEVE,

    SELECT_UPDATE,
    SUCCESS_UPDATE,

    SELECT_DELETE,
    SUCCESS_DELETE,

	CLOSE_DATA,
	CLOSE_FORM,
	GO_HOME,

    BEFORE_REQUEST,
    AFTER_RESPONSE,
    DATA_RESPONSE,
    ERRORS_RESPONSE,

} from "./constants.js";

// --- --- --- --- --- --- --- --- ---

const initialUiux = {
	mode: null,
	allowRequest: null,
	allowEdit: null,
	isLoading: null,
};

const initialData = {
};

export const initialState = initialData => {
	return {
		initialUiux: initialUiux,
		initialData: initialData,

		uiux: {...initialUiux},
		data: {...initialData},
		errors: {},
	
		items: {},
	};
};

export const baseFormReducer = (namespace, state=initialState(initialData), action) => {
	let stateCopy;

    switch (action.type) {
        case `${namespace}/${SELECT_CREATE}`:
        	stateCopy = {...state};
			stateCopy.uiux.mode = 'CREATE';
			stateCopy.uiux.allowEdit = true;
			stateCopy.uiux.allowRequest = false;
			return stateCopy;

		case `${namespace}/${SELECT_RETRIEVE}`:
			stateCopy = {...state};
			stateCopy.uiux.mode = 'RETRIEVE';
			stateCopy.uiux.allowEdit = true;
			stateCopy.uiux.allowRequest = false;
			return stateCopy;
	
		case `${namespace}/${SELECT_UPDATE}`:
			stateCopy = {...state};
			stateCopy.uiux.mode = 'UPDATE';
			stateCopy.uiux.allowEdit = true;
			stateCopy.uiux.allowRequest = false;
			return stateCopy;
	
		case `${namespace}/${SELECT_DELETE}`:
			stateCopy = {...state};
			stateCopy.uiux.mode = 'DELETE';
			stateCopy.uiux.allowEdit = false;
			stateCopy.uiux.allowRequest = false;
			return stateCopy;
	
		case `${namespace}/${SUCCESS_CREATE}`:
			stateCopy = {...state};
			stateCopy.data = {...stateCopy.initialData, ...action.payload.data};
			return stateCopy;
	
		case `${namespace}/${SUCCESS_RETRIEVE}`:
			return state;
	  
        case `${namespace}/${SUCCESS_UPDATE}`:
        	stateCopy = {...state};
			stateCopy.data = {...action.payload.data};
			stateCopy.items[action.payload.data.id] = {...stateCopy.data};
			return stateCopy;
  
	    case `${namespace}/${SUCCESS_DELETE}`:
        	stateCopy = {...state};
			stateCopy.data = {...stateCopy.initialData};
			delete stateCopy.items[action.payload.data.id];
			return stateCopy;

		case `${namespace}/${CLOSE_DATA}`:
			stateCopy = {...state};
			stateCopy.uiux = {...stateCopy.initialUiux};
			stateCopy.data = {...stateCopy.initialData};
			stateCopy.errors = {};
			return stateCopy;
	
	    case `${namespace}/${CLOSE_FORM}`:
			stateCopy = {...state};
			stateCopy.uiux = {...stateCopy.initialUiux};
			stateCopy.data = {...stateCopy.initialData};
			stateCopy.errors = {};
			stateCopy.items = {};
			return stateCopy;

		case `${namespace}/${GO_HOME}`:
			action.payload.history.push('/')
			return state;

		case `${namespace}/${BEFORE_REQUEST}`:
			stateCopy = {...state};
			stateCopy.uiux.allowEdit = false;
			stateCopy.uiux.allowRequest = false;
			stateCopy.uiux.isLoading = true;
			return stateCopy;

		case `${namespace}/${AFTER_RESPONSE}`:
			stateCopy = {...state};
			stateCopy.uiux.allowEdit = true;
			stateCopy.uiux.isLoading = false;
			return stateCopy;

		case `${namespace}/${DATA_RESPONSE}`:
			stateCopy = {...state};
			stateCopy.errors = {};
			return stateCopy;

		case `${namespace}/${ERRORS_RESPONSE}`:
			stateCopy = {...state};

			// Enclose non field errors in an `errors` key
			if (typeof(action.payload.errors) === 'string')
				action.payload.errors = {'errors': action.payload.errors};
			let nonFieldErrors = [];
			const fieldKeys = Object.keys(stateCopy.data);
			Object.keys(action.payload.errors).forEach(x => !fieldKeys.includes(x)?nonFieldErrors.push(action.payload.errors[x]):null);
			Object.keys(action.payload.errors).forEach(x => !fieldKeys.includes(x)?delete action.payload.errors[x]:null);
			action.payload.errors.errors = nonFieldErrors;

			stateCopy.errors = {...action.payload.errors};
			return stateCopy;
	
		default:
	        return state;
    };
};
 