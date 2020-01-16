const NAMESPACE = 'payments';

const LABELS = {
    INPUT_DATE: 'ΗΜ/ΝΙΑ',
    INPUT_INCOMING: 'ΕΙΣΠΡΑΞΗ',
    INPUT_OUTGOING: 'ΠΛΗΡΩΜΗ',
    INPUT_REMARKS: 'ΣΗΜΕΙΩΣΗ',
};

const ACTIONS = {
    CHANGE_DATE: 'CHANGE_DATE',
    CHANGE_INCOMING: 'CHANGE_INCOMING',
    CHANGE_OUTGOING: 'CHANGE_OUTGOING',
    CHANGE_REMARKS: 'CHANGE_REMARKS',
};

module.exports = {
    NAMESPACE,
    ACTIONS,
    LABELS,
}
