import {
    CHANGE_CODE,
    CHANGE_NAME,
} from './constants.js';

export const onChangeCode = (namespace, code) => {
    return {
        type: `${namespace}/${CHANGE_CODE}`,
		payload: {code},
    }
}

export const onChangeName = (namespace, name) => {
    return {
        type: `${namespace}/${CHANGE_NAME}`,
		payload: {name},
    }
}
