import { ACTIONS } from './constants.js';

export const onChangeCode = (namespace, code) => {
    return {
        type: `${namespace}/${ACTIONS.CHANGE_CODE}`,
		payload: {code},
    }
}

export const onChangeName = (namespace, name) => {
    return {
        type: `${namespace}/${ACTIONS.CHANGE_NAME}`,
		payload: {name},
    }
}
