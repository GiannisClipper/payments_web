import {
    CHANGE_CODE,
    CHANGE_NAME,
    CHANGE_IS_INCOME,
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

export const onChangeIsIncoming = (namespace, is_incoming) => {
    return {
        type: `${namespace}/${CHANGE_IS_INCOME}`,
		payload: {is_incoming},
    }
}
