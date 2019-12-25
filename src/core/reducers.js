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


const initialData = {
}

const initialUiux = {
	actionType: null,
	enableSubMenu: null,
	enableSave: null,
	enableEdit: null,
	isLoading: null,
}

const initialItem = (initialData) => {
	return {
		data: {...initialData},
		uiux: {...initialUiux},
	}
}

export const initialState = (initialData) => {
	return {
		newItem: {...initialItem(initialData)},
		items: [],
	}
}

export const basicFormReducer = (state=initialState, action) => {
	let stateCopy, itemPointer;

    switch (action.type) {
        case SELECT_CREATE:
        	stateCopy = {...state};
			stateCopy.newItem.uiux.actionType = action.type;
			stateCopy.newItem.uiux.enableSubMenu = true;
			stateCopy.newItem.uiux.enableEdit = true;
			stateCopy.newItem.uiux.enableSave = false;
			return stateCopy;

		case VERIFY_CREATE:
			stateCopy = {...state};
			if (action.payload.id === null) {
				stateCopy.items.push({
					data: {...stateCopy.newItem.data},
					uiux: {...initialUiux},
				});
				let id = stateCopy.items.length - 1;
				stateCopy.items[id].data.id = id;
				stateCopy.newItem.data = {...initialData};
				stateCopy.newItem.uiux = {...initialUiux};
			}
			return stateCopy;
	
		case SELECT_RETRIEVE:
			stateCopy = {...state};
			stateCopy.newItem.uiux.actionType = action.type;
			stateCopy.newItem.uiux.enableSubMenu = true;
			stateCopy.newItem.uiux.enableEdit = true;
			stateCopy.newItem.uiux.enableSave = false;
			return stateCopy;

		case VERIFY_RETRIEVE:
			stateCopy = {...state};
			return stateCopy;
	
        case SELECT_UPDATE:
        	stateCopy = {...state};
			stateCopy.items[action.payload.id].uiux.actionType = action.type;
            stateCopy.items[action.payload.id].uiux.enableSubMenu = true;
            stateCopy.items[action.payload.id].uiux.enableEdit = true;
            stateCopy.items[action.payload.id].uiux.enableSave = false;
            return stateCopy;
  
        case VERIFY_UPDATE:
			stateCopy = {...state};
			return stateCopy;
  
		case SELECT_DELETE:
        	stateCopy = {...state};
			stateCopy.items[action.payload.id].uiux.actionType = action.type;
            stateCopy.items[action.payload.id].uiux.enableSubMenu = true;
        	return stateCopy;

	    case VERIFY_DELETE:
        	stateCopy = {...state};
			delete stateCopy.items[action.payload.id];
			stateCopy.items[action.payload.id].uiux.actionType = CLOSE_ITEM;
			return stateCopy;

	    case CLOSE_FORM:
        	stateCopy = {...state};
			if (action.payload.id === null) {
				stateCopy.newItem.data = {...action.payload.initialData};
				stateCopy.newItem.uiux = {...initialUiux};
			} else {
				stateCopy.items[action.payload.id].uiux = {...initialUiux};
			}
			return stateCopy;

		case GO_HOME:
			action.payload.history.push('/')
			return state;

		case BEFORE_REQUEST:
			stateCopy = {...state};
			itemPointer = (action.payload.id === null)?stateCopy.newItem:stateCopy.items[action.payload.id];
			itemPointer.uiux.enableEdit = false;
			itemPointer.uiux.enableSave = false;
			itemPointer.uiux.isLoading = true;
			return stateCopy;

		case AFTER_REQUEST:
			stateCopy = {...state};
			itemPointer = (action.payload.id === null)?stateCopy.newItem:stateCopy.items[action.payload.id];
			itemPointer.uiux.isLoading = false;
			itemPointer.uiux.enableEdit = true;
			return stateCopy;
	
		default:
	        return state;
    }
}
