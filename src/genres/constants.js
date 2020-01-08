const NAMESPACE = 'genres';

const LABELS = {
    INPUT_CODE: 'ΚΩΔΙΚΟΣ',
    INPUT_NAME: 'ΟΝΟΜΑΣΙΑ',
    INPUT_IS_INCOMING: 'ΚΑΤΗΓΟΡΙΑ',
    INPUT_IS_INCOMING_TRUE: 'ΕΙΣΠΡΑΞΕΩΝ',
    INPUT_IS_INCOMING_FALSE: 'ΠΛΗΡΩΜΩΝ',
    INPUT_FUND: 'ΛΟΓΑΡΙΑΣΜΟΣ',
};

const ACTIONS = {
    CHANGE_CODE: 'CHANGE_CODE',
    CHANGE_NAME: 'CHANGE_NAME',
    CHANGE_IS_INCOMING: 'CHANGE_IS_INCOMING',
    CHANGE_FUND: 'CHANGE_FUND',
    FOCUS_FUND: 'FOCUS_FUND',
    BLUR_FUND: 'BLUR_FUND',
    SUCCESS_RETRIEVE_FUNDS: 'SUCCESS_RETRIEVE_FUNDS',
};

module.exports = {
    NAMESPACE,
    ACTIONS,
    LABELS,
}