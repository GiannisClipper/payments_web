import { 
    SELECT_CREATE,
    VERIFY_CREATE,

    SELECT_RETRIEVE,
    VERIFY_RETRIEVE,

    SELECT_UPDATE,
    VERIFY_UPDATE,

    SELECT_DELETE,
    VERIFY_DELETE,

	CLOSE_ITEM,
	CLOSE_FORM,
	GO_HOME,

    BEFORE_REQUEST,
	AFTER_REQUEST,

} from "./constants.js";

const initialUiux = {
	mode: null,
	allowSave: null,
	allowEdit: null,
	isLoading: null,
}

const initialData = {
}

export const initialState = (moreInitialUiux, initialData) => {
	return {
		uiux: {...moreInitialUiux, ...initialUiux},
		data: {...initialData},
		items: {},
	}
}

export const baseFormReducer = (state=initialState({}, initialData), action) => {
	let stateCopy;

    switch (action.type) {
        case SELECT_CREATE:
        	stateCopy = {...state};
			stateCopy.uiux.mode = 'CREATE';
			stateCopy.uiux.allowEdit = true;
			stateCopy.uiux.allowSave = false;
			return stateCopy;

		case SELECT_RETRIEVE:
			stateCopy = {...state};
			stateCopy.uiux.mode = 'RETRIEVE';
			stateCopy.uiux.allowEdit = true;
			stateCopy.uiux.allowSave = false;
			return stateCopy;
	
		case SELECT_UPDATE:
			stateCopy = {...state};
			stateCopy.uiux.mode = 'UPDATE';
			stateCopy.uiux.allowEdit = true;
			stateCopy.uiux.allowSave = false;
			return stateCopy;
	
		case SELECT_DELETE:
			stateCopy = {...state};
			stateCopy.uiux.mode = 'DELETE';
			stateCopy.uiux.allowEdit = false;
			stateCopy.uiux.allowSave = false;
			return stateCopy;
	
		case VERIFY_CREATE:
			stateCopy = {...state};
			if (action.payload.id === null)
				stateCopy.items.push({data: {...stateCopy.data}});
			return stateCopy;
	
		case VERIFY_RETRIEVE:
			return state;
	  
        case VERIFY_UPDATE:
        	stateCopy = {...state};
			stateCopy.items[action.payload.id] = {...stateCopy.data};
			return stateCopy;
  
	    case VERIFY_DELETE:
        	stateCopy = {...state};
			delete stateCopy.items[action.payload.id];
			return stateCopy;

		case CLOSE_ITEM:
			stateCopy = {...state};
			stateCopy.uiux = {...stateCopy.uiux, ...initialUiux};
			stateCopy.data = {...initialData};	
			return stateCopy;
	
	    case CLOSE_FORM:
			stateCopy = {...state};
			stateCopy = initialState({...stateCopy.uiux}, action.payload.initialData);
			return stateCopy;

		case GO_HOME:
			action.payload.history.push('/')
			return state;

		case BEFORE_REQUEST:
			stateCopy = {...state};
			stateCopy.uiux.allowEdit = false;
			stateCopy.uiux.allowSave = false;
			stateCopy.uiux.isLoading = true;
			return stateCopy;

		case AFTER_REQUEST:
			stateCopy = {...state};
			stateCopy.uiux.allowEdit = true;
			stateCopy.uiux.isLoading = false;
			return stateCopy;
	
		default:
	        return state;
    }
}
