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
            onSelectCreate: () => dispatch(onSelectCreate()),
            onSelectRetrieve: () => dispatch(onSelectRetrieve()),
            onSelectUpdate: id => dispatch(onSelectUpdate(id)),
            onSelectDelete: id => dispatch(onSelectDelete(id)),
            onCloseForm: initialData => dispatch(onCloseForm(initialData)),
            onGoHome: actions => dispatch(onGoHome(actions)),

            onVerifyUpdate: id => dispatch(onVerifyUpdate(id)),
            onVerifyCreate: () => dispatch(onVerifyCreate()),
            onVerifyRetrieve: () => dispatch(onVerifyRetrieve()),
            onVerifyDelete: id => dispatch(onVerifyDelete(id)),
            onCloseData: initialData => dispatch(onCloseData(initialData)),

            onChangeCode: (id, code) => dispatch(onChangeCode(id, code)),
            onChangeName: (id, name) => dispatch(onChangeName(id, name)),
        }
    };
}

export const FundsContainer = connect(mapStateToProps, mapDispatchToProps)(FundsForm);
