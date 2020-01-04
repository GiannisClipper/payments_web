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

export const onChangeIsIncome = (namespace, is_income) => {
    return {
        type: `${namespace}/${CHANGE_IS_INCOME}`,
		payload: {is_income},
    }
}
