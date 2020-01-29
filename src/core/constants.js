const LABELS = {
    BUTTON_SELECT_CREATE: 'ΝΕΑ ΕΓΓΡΑΦΗ',
    BUTTON_SELECT_RETRIEVE: 'ΑΝΑΖΗΤΗΣΗ',
    BUTTON_SELECT_UPDATE: 'ΕΠΕΞΕΡΓΑΣΙΑ',
    BUTTON_SELECT_DELETE: 'ΔΙΑΓΡΑΦΗ',
    BUTTON_SELECT_DELETE_RELATED: 'X',

    BUTTON_REQUEST_CREATE: 'ΑΠΟΘΗΚΕΥΣΗ',
    BUTTON_REQUEST_RETRIEVE: 'ΑΝΑΖΗΤΗΣΗ',
    BUTTON_REQUEST_UPDATE: 'ΑΠΟΘΗΚΕΥΣΗ',
    BUTTON_REQUEST_DELETE: 'ΕΠΙΒΕΒΑΙΩΣΗ',
    BUTTON_REQUEST_RELATED: '?',

    BUTTON_GO_HOME: 'ΑΡΧΙΚΗ',
    BUTTON_CLOSE_FORM: 'ΚΛΕΙΣΙΜΟ',
    BUTTON_CLOSE_MODE: 'ΚΛΕΙΣΙΜΟ',
    BUTTON_CLOSE_RELATED: 'ΚΛΕΙΣΙΜΟ',

    INPUT_ID: 'ID',
}

const ACTIONS = {
    SELECT_CREATE: 'SELECT_CREATE',
    SELECT_RETRIEVE: 'SELECT_RETRIEVE',
    SELECT_UPDATE: 'SELECT_UPDATE',
    SELECT_DELETE: 'SELECT_DELETE',
    SELECT_RELATED: 'SELECT_RELATED',
    SELECT_DELETE_RELATED: 'SELECT_DELETE_RELATED',

    REQUEST_CREATE: 'REQUEST_CREATE',
    REQUEST_RETRIEVE: 'REQUEST_RETRIEVE',
    REQUEST_UPDATE: 'REQUEST_UPDATE',
    REQUEST_DELETE: 'REQUEST_DELETE',

    SUCCESS_CREATE: 'SUCCESS_CREATE',
    SUCCESS_RETRIEVE: 'SUCCESS_RETRIEVE',
    SUCCESS_UPDATE: 'SUCCESS_UPDATE',
    SUCCESS_DELETE: 'SUCCESS_DELETE',
    SUCCESS_RELATED: 'SUCCESS_RELATED',

    GO_HOME: 'GO_HOME',
    CLOSE_FORM: 'CLOSE_FORM',
    CLOSE_MODE: 'CLOSE_MODE',
    CLOSE_RELATED: 'CLOSE_RELATED',

    BEFORE_REQUEST: 'BEFORE_REQUEST',
    AFTER_RESPONSE: 'AFTER_RESPONSE',
    BEFORE_REQUEST_RELATED: 'BEFORE_REQUEST_RELATED',
    AFTER_RESPONSE_RELATED: 'AFTER_RESPONSE_RELATED',
    DATA_RESPONSE: 'DATA_RESPONSE',
    ERRORS_RESPONSE: 'ERRORS_RESPONSE',
};

module.exports = {
    LABELS,
    ACTIONS,
}
