const NAMESPACE = 'genres';

const LABELS = {
    INPUT_CODE: 'ΚΩΔΙΚΟΣ',
    INPUT_NAME: 'ΟΝΟΜΑΣΙΑ',
    INPUT_IS_INCOMING: '',
    INPUT_IS_INCOMING_TRUE: 'ΕΙΣΠΡΑΞΕΙΣ',
    INPUT_IS_INCOMING_FALSE: 'ΠΛΗΡΩΜΕΣ',
    INPUT_FUND: 'ΛΟΓΑΡΙΑΣΜΟΣ',
    BUTTON_SELECT_RETRIEVE_FUND: 'ΛΟΓΑΡΙΑΣΜΟΙ',
};

const ACTIONS = {
    CHANGE_CODE: 'CHANGE_CODE',
    CHANGE_NAME: 'CHANGE_NAME',
    CHANGE_IS_INCOMING: 'CHANGE_IS_INCOMING',
    SELECT_RETRIEVE_FUND: 'SELECT_RETRIEVE_FUND',
};

module.exports = {
    NAMESPACE,
    ACTIONS,
    LABELS,
}