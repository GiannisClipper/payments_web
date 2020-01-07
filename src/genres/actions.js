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

export const onChangeIsIncoming = (namespace, is_incoming) => {
    return {
        type: `${namespace}/${ACTIONS.CHANGE_IS_INCOME}`,
		payload: {is_incoming},
    }
}

export const onSelectRetrieveFund = namespace => {
    return {
        type: `${namespace}/${ACTIONS.SELECT_RETRIEVE_FUND}`,
		payload: {},
    }
}
