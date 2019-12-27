import { connect } from 'react-redux';

import { 
    FundsForm,
} from './components.jsx';

import {
    onSelectCreate,
    onSelectRetrieve,
    onSelectUpdate,
    onSelectDelete,
    onCloseForm,
    onGoHome,

    onVerifyUpdate,
    onVerifyDelete,
    onCloseData,
} from '../core/actions.js';

import {
    onVerifyCreate,
    onVerifyRetrieve,
	onChangeCode,
	onChangeName,
} from './actions.js';

import { initialData } from './reducers.js';

// --- --- --- --- --- --- --- --- ---

const mapStateToProps = (state, ownProps=null) => {
    //const { dateId } = ownProps;
    return {
        globals: {...state.globals},
        uiux: {...state.funds.uiux},
        data: {...state.funds.data},
        initialData: {...initialData},
        items: {...state.funds.items},
    };
}

const mapDispatchToProps = dispatch => {
    return {
        actions: {
            onSelectCreate: uiux => dispatch(onSelectCreate(uiux)),
            onSelectRetrieve: uiux => dispatch(onSelectRetrieve(uiux)),
            onSelectUpdate: (uiux, id) => dispatch(onSelectUpdate(uiux, id)),
            onSelectDelete: (uiux, id) => dispatch(onSelectDelete(uiux, id)),
            onCloseForm: (uiux, initialData) => dispatch(onCloseForm(uiux, initialData)),
            onGoHome: (uiux, actions) => dispatch(onGoHome(uiux, actions)),

            onVerifyCreate: (globals, uiux, data) => dispatch(onVerifyCreate(globals, uiux, data)),
            onVerifyUpdate: (uiux, id )=> dispatch(onVerifyUpdate(uiux, id)),
            onVerifyRetrieve: uiux => dispatch(onVerifyRetrieve(uiux)),
            onVerifyDelete: (uiux, id) => dispatch(onVerifyDelete(uiux, id)),
            onCloseData: (uiux, initialData) => dispatch(onCloseData(uiux, initialData)),

            onChangeCode: (uiux, id, code) => dispatch(onChangeCode(uiux, id, code)),
            onChangeName: (uiux, id, name) => dispatch(onChangeName(uiux, id, name)),
        }
    };
}

export const FundsContainer = connect(mapStateToProps, mapDispatchToProps)(FundsForm);
