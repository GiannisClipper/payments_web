import { 
	CREATE,
	RETRIEVE,
	UPDATE,
    CHANGE_USERNAME,
    CHANGE_PASSWORD,
    CHANGE_PASSWORD2,
    CHANGE_EMAIL,
	SAVE,
	DELETE,
	VERIFY_DELETE,
	EXIT,
} from "./constants.js";

const initialData = {
	id: null,
    username: 'Username...',
	password: 'Password...', 
	password2: 'Password2...', 
	email: 'Email...', 
}

const initialUiux = {
	actionType: null,
	enableSubMenu: null,
	enableSave: null,
	enableEdit: null,
}

const initialItem = {
	data: {...initialData},
	uiux: {...initialUiux},
}

const initialState = {
	newItem: {...initialItem},
    items: [],
}

const usersReducer = (state=initialState, action) => {
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
  
        case CHANGE_USERNAME:
        	stateCopy = {...state};
			itemPointer = (action.id === null)?stateCopy.newItem:stateCopy.items[action.id];
			itemPointer.data.username = action.username;
			itemPointer.uiux.enableSave = true;
            return stateCopy;

        case CHANGE_PASSWORD:
            stateCopy = {...state};
            itemPointer = (action.id === null)?stateCopy.newItem:stateCopy.items[action.id];
            itemPointer.data.password = action.password;
            itemPointer.uiux.enableSave = true;
            return stateCopy;
      
        case CHANGE_PASSWORD2:
            stateCopy = {...state};
            itemPointer = (action.id === null)?stateCopy.newItem:stateCopy.items[action.id];
            itemPointer.data.password2 = action.password2;
            itemPointer.uiux.enableSave = true;
            return stateCopy;
          
        case CHANGE_EMAIL:
            stateCopy = {...state};
            itemPointer = (action.id === null)?stateCopy.newItem:stateCopy.items[action.id];
            itemPointer.data.email = action.email;
            itemPointer.uiux.enableSave = true;
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
			} else {
				stateCopy.items[action.id].uiux.enableSave = false;
			}
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
			if (action.id === null) {
				stateCopy.newItem.data = {...initialData};
				stateCopy.newItem.uiux = {...initialUiux};
			} else {
				stateCopy.items[action.id].uiux = {...initialUiux};
			}
			return stateCopy;

		default:
	        return state;
    }
}

export default usersReducer;
