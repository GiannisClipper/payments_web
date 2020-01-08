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

export const onChangeIsIncoming = is_incoming => {
    return {
        type: `${NAMESPACE}/${ACTIONS.CHANGE_IS_INCOME}`,
		payload: {is_incoming},
    }
}

export const onChangeFund = value => {
    return {
        type: `${NAMESPACE}/${ACTIONS.CHANGE_FUND}`,
		payload: {value},
    }
}

export const onFocusFund = () => {
    return {
        type: `${NAMESPACE}/${ACTIONS.FOCUS_FUND}`,
		payload: {},
    }
}

export const onBlurFund = () => {
    return {
        type: `${NAMESPACE}/${ACTIONS.BLUR_FUND}`,
		payload: {},
    }
}

export const onSuccessRetrieveFunds = (namespace, data) => {
    return {
        type: `${NAMESPACE}/${ACTIONS.SUCCESS_RETRIEVE_FUNDS}`,
		payload: {...data},
    }
}
