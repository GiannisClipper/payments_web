import { NAMESPACE, ACTIONS } from './constants.js';

export const onChangeDate = date => {
    return {
        type: `${NAMESPACE}/${ACTIONS.CHANGE_DATE}`,
		payload: {date},
    }
}

export const onChangeIncoming = incoming => {
    return {
        type: `${NAMESPACE}/${ACTIONS.CHANGE_INCOMING}`,
		payload: {incoming},
    }
}

export const onChangeOutgoing = outgoing => {
    return {
        type: `${NAMESPACE}/${ACTIONS.CHANGE_OUTGOING}`,
		payload: {outgoing},
    }
}

export const onChangeRemarks = remarks => {
    return {
        type: `${NAMESPACE}/${ACTIONS.CHANGE_REMARKS}`,
		payload: {remarks},
    }
}
