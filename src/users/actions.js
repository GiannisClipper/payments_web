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
    TO_DELETE,
    VERIFY_DELETE,
    EXIT,
} from './constants.js';

export const onCreate = () => {
    //return {
    //    type: CREATE,
    //}
    return dispatch => {
        dispatch(onStartSave(null));
        setTimeout(() => {
            dispatch(onSave(null));
            dispatch(onFinishSave(null));
        }, 10000);
    };
}

export const onRetrieve = () => {
    return {
        type: RETRIEVE,
    }
}

export const onUpdate = id => {
    return {
        type: UPDATE,
        id
    }
}

export const onChangeUsername = (id, username) => {
    return {
        type: CHANGE_USERNAME,
		id,
		username
    }
}

export const onChangePassword = (id, password) => {
    return {
        type: CHANGE_PASSWORD,
		id,
		password
    }
}

export const onChangePassword2 = (id, password2) => {
    return {
        type: CHANGE_PASSWORD2,
		id,
		password2
    }
}

export const onChangeEmail = (id, email) => {
    return {
        type: CHANGE_EMAIL,
		id,
		email
    }
}

export const onSave = id => {
    return {
        type: SAVE,
        id
    }
}

export const onStartSave = id => {
    return {
        type: START_SAVE,
        id
    }
}

export const onFinishSave = id => {
    return {
        type: FINISH_SAVE,
        id
    }
}

export const onDelete = id => {
    return {
        type: TO_DELETE,
        id
    }
}

export const onVerifyDelete = id => {
    return {
        type: VERIFY_DELETE,
        id
    }
}

export const onExit = id => {
    return {
        type: EXIT,
        id
    }
}
