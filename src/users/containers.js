import { connect } from 'react-redux';

import { 
    UsersForm,
    SignupForm,
    SigninForm,
    SignoutForm,
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
    onSignin,
    onSignout,
} from '../root/actions.js';

import {
    onVerifyCreate,
    onVerifyRetrieve,

	onChangeUsername,
	onChangePassword,
	onChangePassword2,
	onChangeEmail,
} from './actions.js';

import { initialData } from './reducers.js';

// --- --- --- --- --- --- --- --- ---

const mapStateToProps = (state, ownProps=null) => {
    //const { dateId } = ownProps;
    return {
        globals: {...state.globals},
        uiux: {...state.users.uiux},
        data: {...state.users.data},
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

            onChangeUsername: (uiux, id, username) => dispatch(onChangeUsername(uiux, id, username)),
            onChangePassword: (uiux, id, password) => dispatch(onChangePassword(uiux, id, password)),
            onChangePassword2: (uiux, id, password2) => dispatch(onChangePassword2(uiux, id, password2)),
            onChangeEmail: (uiux, id, email) => dispatch(onChangeEmail(uiux, id, email)),
        }
    };
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersForm);

// --- --- --- --- --- --- --- --- ---

const mapStateToPropsSign = state => {
    let retval = {
        globals: {...state.globals},
        uiux: {...state.users.uiux},
        data: {...state.users.data},
        initialData: {...initialData},
    };

    if (retval.uiux.allowEdit === null)
        retval.uiux.allowEdit = true;

    return retval;
}

const mapDispatchToPropsSignup = dispatch => {
    return {
        actions: {
            onVerifyCreate: (globals, uiux, data) => dispatch(onVerifyCreate(globals, uiux, data)),
            onCloseForm: (uiux, initialData) => dispatch(onCloseForm(uiux, initialData)),
            onGoHome: (uiux, actions) => dispatch(onGoHome(uiux, actions)),

            onChangeUsername: (uiux, id, username) => dispatch(onChangeUsername(uiux, id, username)),
            onChangePassword: (uiux, id, password) => dispatch(onChangePassword(uiux, id, password)),
            onChangePassword2: (uiux, id, password2) => dispatch(onChangePassword2(uiux, id, password2)),
            onChangeEmail: (uiux, id, email) => dispatch(onChangeEmail(uiux, id, email)),
        }
    };
}

export const SignupContainer = connect(mapStateToPropsSign, mapDispatchToPropsSignup)(SignupForm);

// --- --- --- --- --- --- --- --- ---

const mapDispatchToPropsSignin = dispatch => {
    return {
        actions: {
            onSignin: (user, token) => dispatch(onSignin(user, token)),
            onVerifyRetrieve: (globals, uiux, data) => dispatch(onVerifyRetrieve(globals, uiux, data)),
            onCloseForm: (uiux, initialData) => dispatch(onCloseForm(uiux, initialData)),
            onGoHome: (uiux, actions) => dispatch(onGoHome(uiux, actions)),

            onChangeUsername: (uiux, id, username) => dispatch(onChangeUsername(uiux, id, username)),
            onChangePassword: (uiux, id, password) => dispatch(onChangePassword(uiux, id, password)),
        }
    };
}

export const SigninContainer = connect(mapStateToPropsSign, mapDispatchToPropsSignin)(SigninForm);

// --- --- --- --- --- --- --- --- ---

const mapStateToPropsSignout = state => {
    return {globals: {...state.globals}};
}

const mapDispatchToPropsSignout = dispatch => {
    return {
        actions: {
            onSignout: globals => dispatch(onSignout(globals)),
            onGoHome: (uiux, actions) => dispatch(onGoHome(uiux, actions)),
        }
    };
}

export const SignoutContainer = connect(mapStateToPropsSignout, mapDispatchToPropsSignout)(SignoutForm);

