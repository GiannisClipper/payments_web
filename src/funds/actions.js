import { 
    CREATE,
    UPDATE,
    CHANGE_CODE,
    CHANGE_NAME,
    SAVE,
    TO_DELETE,
    VERIFY_DELETE,
    EXIT,
} from './constants.js';

export const onCreate = () => {
    return {
        type: CREATE,
    }
}

export const onUpdate = id => {
    return {
        type: UPDATE,
        id
    }
}

export const onChangeCode = (id, code) => {
    return {
        type: CHANGE_CODE,
		id,
		code
    }
}

export const onChangeName = (id, name) => {
    return {
        type: CHANGE_NAME,
		id,
		name
    }
}

export const onSave = id => {
    return {
        type: SAVE,
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
