import { 
	CREATE,
	RETRIEVE,
	UPDATE,
    CHANGE_USERNAME,
    CHANGE_PASSWORD,
    CHANGE_PASSWORD2,
    CHANGE_EMAIL,
	SAVE,
	START_SAVE,
	FINISH_SAVE,
	DELETE,
	VERIFY_DELETE,
	EXIT,
} from "./constants.js";

async function request(url='', method, token=null, data={}, onSuccess=null, onFail=null) {

    //define arguments
    let kwargs = {
        method: method, 
        mode: 'cors', 
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+token
        }
    }

    //add body in arguments
    if (method.toUpperCase()!=='GET') 
        Object.assign(kwargs, {body: JSON.stringify(data)});

    //make request
    try {
        let response = await fetch(url, kwargs);
        let status = response.status;
        data = await response.json();
        if (status>=200 && status<=299)
            onSuccess && onSuccess(status, data);
        //else
        //    throw ({status:status, message:data});

    //handle errors
    } catch(err) { 
        //alert(err.status+':'+JSON.stringify(err.message));
        onFail && onFail(err.status, err.message);
    }
}

/*async function createUser(event) {
//	await this.setState({editable:false});
	await request(`${stateCopy.globals.origin}/users`, 'POST', stateCopy.globals.token, this.state.fields,
		(status, data) => {
			alert(data);
//			this.setSavedFields(data);
//			this.setState({mode:'update', fields:this.getSavedFields(), changed:false, editable:true});
		},
		(status, message) => {
			alert(message);
//			this.setState({message:message, editable:true});
		}        
	);
}*/	


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
	isLoading: null,
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
