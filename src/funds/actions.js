import { NAMESPACE, ACTIONS } from './constants.js';

export const onChangeCode = code => {
    return {
        type: `${NAMESPACE}/${ACTIONS.CHANGE_CODE}`,
		payload: {code},
    }
}

export const onChangeName = name => {
    return {
        type: `${NAMESPACE}/${ACTIONS.CHANGE_NAME}`,
		payload: {name},
    }
}
