import { 
    CREATE,
	UPDATE,
	CHANGE_CODE,
	CHANGE_NAME,
	SAVE,
	DELETE,
	VERIFY_DELETE,
	EXIT,
} from "./constants.js";

const initialData = {
	id: null,
	code: 'Code...', 
	name: 'Name...',
}

const initialUiux = {
	actionType: null,
	enableMenu: null,
	enableSave: null,
	enableEdit: null,
}

const initialItem = {
	data: Object.assign({}, initialData),
	uiux: Object.assign({}, initialUiux),
}

const initialState = {
	newItem: Object.assign({}, initialItem),
    items: [],
};

const fundsReducer = (state=initialState, action) => {
	let stateCopy, itemPointer;

	console.log(action.type, state)

    switch (action.type) {
        case CREATE:
        	stateCopy = {...state};
			stateCopy.newItem.uiux.actionType = action.type;
			stateCopy.newItem.uiux.enableMenu = true;
			stateCopy.newItem.uiux.enableEdit = true;
			stateCopy.newItem.uiux.enableSave = false;
	        return stateCopy;
  
        case UPDATE:
            stateCopy = Object.assign({}, state);
			stateCopy.items[action.id].uiux.actionType = action.type;
            stateCopy.items[action.id].uiux.enableMenu = true;
            stateCopy.items[action.id].uiux.enableEdit = true;
            stateCopy.items[action.id].uiux.enableSave = false;
            return stateCopy;
  
        case CHANGE_CODE:
			stateCopy = Object.assign({}, state);
			itemPointer = (action.id === null)?stateCopy.newItem:stateCopy.items[action.id];
	        itemPointer.data.code = action.code;
			itemPointer.uiux.enableSave = true;
            return stateCopy;
  
        case CHANGE_NAME:
			stateCopy = Object.assign({}, state);
			itemPointer = (action.id === null)?stateCopy.newItem:stateCopy.items[action.id];
			itemPointer.data.name = action.name;
			itemPointer.uiux.enableSave = true;
            return stateCopy;

		case SAVE:
			stateCopy = Object.assign({}, state);
			stateCopy.items[action.id].uiux.actionType = UPDATE;
			stateCopy.items[action.id].uiux.enableSave = false;
			return stateCopy;    
  
	    case DELETE:
    	    stateCopy = Object.assign({}, state);
			stateCopy.items[action.id].uiux.actionType = action.type;
            stateCopy.items[action.id].uiux.enableMenu = true;
        	return stateCopy;
      
	    case VERIFY_DELETE:
    	    stateCopy = Object.assign({}, state);
			delete stateCopy.items[action.id];
			stateCopy.items[action.id].uiux.actionType = EXIT;
			return stateCopy;
        
	    case EXIT:
			stateCopy = Object.assign({}, state);
			itemPointer = (action.id === null)?stateCopy.newItem:stateCopy.items[action.id];
			console.log('itempointer', itemPointer, action.id);
			itemPointer.uiux.actionType = action.type;
			itemPointer.uiux.enableEdit = false;
            itemPointer.uiux.enableMenu = false;
			return stateCopy;

		default:
	        return state;
    }
}

export default fundsReducer;
