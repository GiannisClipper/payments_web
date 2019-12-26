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
            onSelectCreate: () => dispatch(onSelectCreate()),
            onSelectRetrieve: () => dispatch(onSelectRetrieve()),
            onSelectUpdate: id => dispatch(onSelectUpdate(id)),
            onSelectDelete: id => dispatch(onSelectDelete(id)),
            onCloseData: initialData => dispatch(onCloseData(initialData)),
            onGoHome: actions => dispatch(onGoHome(actions)),

            onVerifyUpdate: id => dispatch(onVerifyUpdate(id)),
            onVerifyCreate: () => dispatch(onVerifyCreate()),
            onVerifyRetrieve: () => dispatch(onVerifyRetrieve()),
            onVerifyDelete: id => dispatch(onVerifyDelete(id)),
            onCloseForm: initialData => dispatch(onCloseForm(initialData)),

            onChangeUsername: (id, username) => dispatch(onChangeUsername(id, username)),
            onChangePassword: (id, password) => dispatch(onChangePassword(id, password)),
            onChangePassword2: (id, password2) => dispatch(onChangePassword2(id, password2)),
            onChangeEmail: (id, email) => dispatch(onChangeEmail(id, email)),
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
            onVerifyCreate: (globals, data) => dispatch(onVerifyCreate(globals, data)),
            onCloseForm: initialData => dispatch(onCloseForm(initialData)),
            onGoHome: actions => dispatch(onGoHome(actions)),

            onChangeUsername: (id, username) => dispatch(onChangeUsername(id, username)),
            onChangePassword: (id, password) => dispatch(onChangePassword(id, password)),
            onChangePassword2: (id, password2) => dispatch(onChangePassword2(id, password2)),
            onChangeEmail: (id, email) => dispatch(onChangeEmail(id, email)),
        }
    };
}

export const SignupContainer = connect(mapStateToPropsSign, mapDispatchToPropsSignup)(SignupForm);

// --- --- --- --- --- --- --- --- ---

const mapDispatchToPropsSignin = dispatch => {
    return {
        actions: {
            onSignin: (user, token) => dispatch(onSignin(user, token)),
            onVerifyRetrieve: (globals, data) => dispatch(onVerifyRetrieve(globals, data)),
            onCloseForm: initialData => dispatch(onCloseForm(initialData)),
            onGoHome: actions => dispatch(onGoHome(actions)),

            onChangeUsername: (id, username) => dispatch(onChangeUsername(id, username)),
            onChangePassword: (id, password) => dispatch(onChangePassword(id, password)),
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
            onGoHome: actions => dispatch(onGoHome(actions)),
        }
    };
}

export const SignoutContainer = connect(mapStateToPropsSignout, mapDispatchToPropsSignout)(SignoutForm);

