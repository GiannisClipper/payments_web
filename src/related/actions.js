import { ACTIONS } from './constants.js';

import { ACTIONS as CORE_ACTIONS } from '../core/constants.js';

// --- --- --- --- --- --- --- --- ---

export const onChangeFund = (namespace, value) => {
    return {
        type: `${namespace}/${ACTIONS.CHANGE_FUND}`,
		payload: {value},
    }
}

export const onFocusFund = namespace => {
    return {
        type: `${namespace}/${ACTIONS.FOCUS_FUND}`,
		payload: {},
    }
}

export const onBlurFund = namespace => {
    return {
        type: `${namespace}/${ACTIONS.BLUR_FUND}`,
		payload: {},
    }
}

export const onSuccessRelatedFund = (namespace, resData) => {
    return {
        type: `${namespace}/${CORE_ACTIONS.SUCCESS_RELATED}`,
		payload: {...resData, relatedNamespace: 'fund'},
    }
}

// --- --- --- --- --- --- --- --- ---

export const onChangeGenre = (namespace, value) => {
    return {
        type: `${namespace}/${ACTIONS.CHANGE_GENRE}`,
		payload: {value},
    }
}

export const onFocusGenre = namespace => {
    return {
        type: `${namespace}/${ACTIONS.FOCUS_GENRE}`,
		payload: {},
    }
}

export const onBlurGenre = namespace => {
    return {
        type: `${namespace}/${ACTIONS.BLUR_GENRE}`,
		payload: {},
    }
}

export const onSuccessRelatedGenre = (namespace, resData) => {
    return {
        type: `${namespace}/${CORE_ACTIONS.SUCCESS_RELATED}`,
		payload: {...resData, relatedNamespace: 'genre'},
    }
}
