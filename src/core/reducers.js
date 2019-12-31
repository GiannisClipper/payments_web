import { 
    SELECT_CREATE,
    SUCCESS_CREATE,

    SELECT_RETRIEVE,
    SUCCESS_RETRIEVE,

    SELECT_UPDATE,
    SUCCESS_UPDATE,

    SELECT_DELETE,
    SUCCESS_DELETE,

	CLOSE_MODE,
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
	
		items: {
			data: {}, 
			order: [],
		},
	};
};

export const baseFormReducer = (namespace, state=initialState(initialData), action) => {
	let stateCopy;
	console.log('actiotn.type>>>', action.type);
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
			stateCopy.data = {...stateCopy.initialData, ...stateCopy.items.data[action.payload.id]};
			stateCopy.uiux.mode = 'UPDATE';
			stateCopy.uiux.allowEdit = true;
			stateCopy.uiux.allowRequest = false;
			return stateCopy;
	
		case `${namespace}/${SELECT_DELETE}`:
			stateCopy = {...state};
			stateCopy.data = {...stateCopy.initialData, ...stateCopy.items.data[action.payload.id]};
			stateCopy.uiux.mode = 'DELETE';
			stateCopy.uiux.allowEdit = false;
			stateCopy.uiux.allowRequest = true;
			return stateCopy;
	
		case `${namespace}/${SUCCESS_CREATE}`:
			stateCopy = {...state};
			let itemsCopy = {...state.items};  // To refresh components properly
			itemsCopy.data[action.payload.data.id] = {...action.payload.data};
			itemsCopy.order.push = action.payload.data.id;
			stateCopy.items = {...itemsCopy};
			stateCopy.data = {...stateCopy.initialData};
			stateCopy.uiux.mode = null;
			return stateCopy;
	
		case `${namespace}/${SUCCESS_RETRIEVE}`:
			stateCopy = {...state};
			stateCopy.items.data = {};
			stateCopy.items.order = [];
			action.payload.data.forEach(x => stateCopy.items.data[x.id] = x);
			action.payload.data.forEach(x => stateCopy.items.order.push(x.id));
			stateCopy.uiux.mode = null;
			return stateCopy;
	  
        case `${namespace}/${SUCCESS_UPDATE}`:
        	stateCopy = {...state};
			stateCopy.data = {...action.payload.data};
			stateCopy.items.data[action.payload.data.id] = {...stateCopy.data};
			return stateCopy;
  
	    case `${namespace}/${SUCCESS_DELETE}`:
        	stateCopy = {...state};
			stateCopy.items.order = stateCopy.items.order.filter(x => x !== action.payload.data.id);
			delete stateCopy.items.data[action.payload.data.id];
			stateCopy.data = {...stateCopy.initialData};
			stateCopy.uiux.mode = null;
			return stateCopy;

		case `${namespace}/${CLOSE_MODE}`:
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
			stateCopy.items.data = {};
			stateCopy.items.order = [];
			console.log('items>>>', stateCopy.items);
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

			// Place non field errors in an `errors` key
			if (typeof(action.payload.errors) === 'string')
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
};
 