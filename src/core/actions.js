import {
    CREATE,
    RETRIEVE,
    UPDATE,
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
        }, 2000);
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

export const onExit = (id, initialData) => {
    return {
        type: EXIT,
        payload: {id, initialData},
    }
}
