import { 
    CHANGE_USERNAME,
    CHANGE_PASSWORD,
    CHANGE_PASSWORD2,
    CHANGE_EMAIL,
} from './constants.js';

import {
	initialState,
	basicFormReducer,
} from '../core/reducers.js'

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

export const initialData = {
	id: null,
    username: 'Username...',
	password: 'Password...', 
	password2: 'Password2...', 
	email: 'Email...', 
}

const usersReducer = (state=initialState(initialData), action) => {
	let stateCopy, itemPointer;

    switch (action.type) {
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
        
		default:
			return basicFormReducer(state, action)
	        //return state;
    }
}

export default usersReducer;
