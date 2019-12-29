import { 
    SELECT_CREATE,
    VERIFY_CREATE,

    SELECT_RETRIEVE,
    VERIFY_RETRIEVE,

    SELECT_UPDATE,
    VERIFY_UPDATE,

    SELECT_DELETE,
    VERIFY_DELETE,

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
	allowSave: null,
	allowEdit: null,
	isLoading: null,
};

const initialData = {
};

const initialErrors = {
};

export const initialState = (initialData, initialErrors) => {
	return {
		initialUiux: initialUiux,
		initialData: initialData,
		initialErrors: initialErrors,

		uiux: {...initialUiux},
		data: {...initialData},
		errors: {...initialErrors},
	
		items: {},
	};
};

export const baseFormReducer = (namespace, state=initialState(initialData, initialErrors), action) => {
	let stateCopy;

    switch (action.type) {
        case `${namespace}/${SELECT_CREATE}`:
        	stateCopy = {...state};
			stateCopy.uiux.mode = 'CREATE';
			stateCopy.uiux.allowEdit = true;
			stateCopy.uiux.allowSave = false;
			return stateCopy;

		case `${namespace}/${SELECT_RETRIEVE}`:
			stateCopy = {...state};
			stateCopy.uiux.mode = 'RETRIEVE';
			stateCopy.uiux.allowEdit = true;
			stateCopy.uiux.allowSave = false;
			return stateCopy;
	
		case `${namespace}/${SELECT_UPDATE}`:
			stateCopy = {...state};
			stateCopy.uiux.mode = 'UPDATE';
			stateCopy.uiux.allowEdit = true;
			stateCopy.uiux.allowSave = false;
			return stateCopy;
	
		case `${namespace}/${SELECT_DELETE}`:
			stateCopy = {...state};
			stateCopy.uiux.mode = 'DELETE';
			stateCopy.uiux.allowEdit = false;
			stateCopy.uiux.allowSave = false;
			return stateCopy;
	
		case `${namespace}/${VERIFY_CREATE}`:
			stateCopy = {...state};
			stateCopy.data = {...action.payload.data};
//			if (action.payload.data.id)
//				stateCopy.items.push({data: {...stateCopy.data}});
			return stateCopy;
	
		case `${namespace}/${VERIFY_RETRIEVE}`:
			return state;
	  
        case `${namespace}/${VERIFY_UPDATE}`:
        	stateCopy = {...state};
			stateCopy.items[action.payload.data.id] = {...stateCopy.data};
			return stateCopy;
  
	    case `${namespace}/${VERIFY_DELETE}`:
        	stateCopy = {...state};
			delete stateCopy.items[action.payload.data.id];
			return stateCopy;

		case `${namespace}/${CLOSE_DATA}`:
			stateCopy = {...state};
			stateCopy.uiux = {...stateCopy.initialUiux};
			stateCopy.data = {...stateCopy.initialData};
			stateCopy.errors = {...stateCopy.initialErrors};
			return stateCopy;
	
	    case `${namespace}/${CLOSE_FORM}`:
			stateCopy = {...state};
			stateCopy.uiux = {...stateCopy.initialUiux};
			stateCopy.data = {...stateCopy.initialData};
			stateCopy.errors = {...stateCopy.initialErrors};
			stateCopy.items = {};
			return stateCopy;

		case `${namespace}/${GO_HOME}`:
			action.payload.history.push('/')
			return state;

		case `${namespace}/${BEFORE_REQUEST}`:
			stateCopy = {...state};
			stateCopy.uiux.allowEdit = false;
			stateCopy.uiux.allowSave = false;
			stateCopy.uiux.isLoading = true;
			return stateCopy;

		case `${namespace}/${AFTER_RESPONSE}`:
			stateCopy = {...state};
			stateCopy.uiux.allowEdit = true;
			stateCopy.uiux.isLoading = false;
			return stateCopy;

		case `${namespace}/${DATA_RESPONSE}`:
			stateCopy = {...state};
			stateCopy.errors = {...stateCopy.initialErrors};
			return stateCopy;

		case `${namespace}/${ERRORS_RESPONSE}`:
			stateCopy = {...state};
			stateCopy.errors = {...stateCopy.initialErrors, ...action.payload.errors.errors};
			return stateCopy;
	
		default:
	        return state;
    };
};
 