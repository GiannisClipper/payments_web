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
    onVerifyUpdate,
	onSelectDelete,
    onVerifyDelete,
    onCloseItem,
    onCloseForm,
    onGoHome,
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

// --- --- --- --- --- --- --- --- ---

const mapStateToProps = (state, ownProps=null) => {
    //const { dateId } = ownProps;
    return {
        newItem: {...state.users.newItem},
        items: [...state.users.items],
    };
}

const mapDispatchToProps = dispatch => {
    return {
        actions: {
            onSelectCreate: () => dispatch(onSelectCreate()),
            onVerifyCreate: () => dispatch(onVerifyCreate()),
            onSelectRetrieve: () => dispatch(onSelectRetrieve()),
            onVerifyRetrieve: () => dispatch(onVerifyRetrieve()),
            onSelectUpdate: id => dispatch(onSelectUpdate(id)),
            onVerifyUpdate: id => dispatch(onVerifyUpdate(id)),
            onSelectDelete: id => dispatch(onSelectDelete(id)),
            onVerifyDelete: id => dispatch(onVerifyDelete(id)),
            onCloseItem: id => dispatch(onCloseItem(id)),
            onCloseForm: id => dispatch(onCloseForm(id)),

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
        newItem: {...state.users.newItem},
    };

    if (retval.newItem.uiux.enableEdit === null)
        retval.newItem.uiux.enableEdit = true;

    return retval;
}

const mapDispatchToPropsSignup = dispatch => {
    return {
        actions: {
            onVerifyCreate: (globals, data) => dispatch(onVerifyCreate(globals, data)),
            onCloseForm: (id, initialData) => dispatch(onCloseForm(id, initialData)),
            onGoHome: (actions) => dispatch(onGoHome(actions)),

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
            onCloseForm: (id, initialData) => dispatch(onCloseForm(id, initialData)),
            onGoHome: (actions) => dispatch(onGoHome(actions)),

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
            onSignout: (globals) => dispatch(onSignout(globals)),
            onGoHome: (actions) => dispatch(onGoHome(actions)),
        }
    };
}

export const SignoutContainer = connect(mapStateToPropsSignout, mapDispatchToPropsSignout)(SignoutForm);

