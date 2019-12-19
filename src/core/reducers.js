import { 
	CREATE,
	RETRIEVE,
	UPDATE,
    SAVE,
	START_SAVE,
	FINISH_SAVE,
    DELETE,
	VERIFY_DELETE,
    EXIT,
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
        case CREATE:
        	stateCopy = {...state};
			stateCopy.newItem.uiux.actionType = action.type;
			stateCopy.newItem.uiux.enableSubMenu = true;
			stateCopy.newItem.uiux.enableEdit = true;
			stateCopy.newItem.uiux.enableSave = false;
			return stateCopy;

		case RETRIEVE:
			stateCopy = {...state};
			stateCopy.newItem.uiux.actionType = action.type;
			stateCopy.newItem.uiux.enableSubMenu = true;
			stateCopy.newItem.uiux.enableEdit = true;
			stateCopy.newItem.uiux.enableSave = false;
			return stateCopy;
	  
        case UPDATE:
        	stateCopy = {...state};
			stateCopy.items[action.id].uiux.actionType = action.type;
            stateCopy.items[action.id].uiux.enableSubMenu = true;
            stateCopy.items[action.id].uiux.enableEdit = true;
            stateCopy.items[action.id].uiux.enableSave = false;
            return stateCopy;
  
        case SAVE:
			stateCopy = {...state};
			if (action.id === null) {
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
  
		case START_SAVE:
			stateCopy = {...state};
			itemPointer = (action.id === null)?stateCopy.newItem:stateCopy.items[action.id];
			itemPointer.data.username = "And the new username is...";
			itemPointer.uiux.enableEdit = false;
			itemPointer.uiux.enableSave = false;
			itemPointer.uiux.isLoading = true;
			return stateCopy;

		case FINISH_SAVE:
			stateCopy = {...state};
			itemPointer = (action.id === null)?stateCopy.newItem:stateCopy.items[action.id];
			itemPointer.data.username = "Back to old username...";
			itemPointer.uiux.isLoading = false;
			itemPointer.uiux.enableEdit = true;
			return stateCopy;

		case DELETE:
        	stateCopy = {...state};
			stateCopy.items[action.id].uiux.actionType = action.type;
            stateCopy.items[action.id].uiux.enableSubMenu = true;
        	return stateCopy;

	    case VERIFY_DELETE:
        	stateCopy = {...state};
			delete stateCopy.items[action.id];
			stateCopy.items[action.id].uiux.actionType = EXIT;
			return stateCopy;

	    case EXIT:
        	stateCopy = {...state};
			if (action.payload.id === null) {
				stateCopy.newItem.data = {...action.payload.initialData};
				stateCopy.newItem.uiux = {...initialUiux};
			} else {
				stateCopy.items[action.payload.id].uiux = {...initialUiux};
			}
			return stateCopy;

		default:
	        return state;
    }
}
