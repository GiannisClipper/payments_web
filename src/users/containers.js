import { connect } from 'react-redux';

import {
    InputUsername,
    InputPassword,
    InputPassword2,
    InputEmail,
    DivInputs,
    DivSignupInputs,
    DivSigninInputs,
} from './components/inputs.jsx';

import {
    ButtonSignup,
    ButtonSignin,
} from './components/buttons.jsx';

import {
    UsersForm,
    SignupForm,
    SigninForm,
    SignoutForm,
} from './components/forms.jsx';

import {
    onSelectCreate,
    onSelectRetrieve,
    onVerifyCreate,
    onVerifyRetrieve,
} from '../core/actions.js';

import {
    onSignout,
} from '../root/actions.js';

import {
	onChangeUsername,
	onChangePassword,
	onChangePassword2,
	onChangeEmail,
} from './actions.js';

// --- --- --- --- --- --- --- --- ---

export const MappedInputUsername = connect(
    (state, {namespace}) => ({
        value: state[namespace].data.username,
        errors: state[namespace].errors.username,
        allowEdit: state[namespace].uiux.allowEdit,
    }),
    (dispatch, {namespace}) => ({
        onChangeUsername: value => dispatch(onChangeUsername(namespace, value)),
    })
)(InputUsername);

export const MappedInputPassword = connect(
    (state, {namespace}) => ({
        value: state[namespace].data.password,
        errors: state[namespace].errors.password,
        allowEdit: state[namespace].uiux.allowEdit,
    }),
    (dispatch, {namespace}) => ({
        onChangePassword: value => dispatch(onChangePassword(namespace, value)),
    })
)(InputPassword);

export const MappedInputPassword2 = connect(
    (state, {namespace}) => ({
        value: state[namespace].data.password2,
        errors: state[namespace].errors.password2,
        allowEdit: state[namespace].uiux.allowEdit,
    }),
    (dispatch, {namespace}) => ({
        onChangePassword2: value => dispatch(onChangePassword2(namespace, value)),
    })
)(InputPassword2);

export const MappedInputEmail = connect(
    (state, {namespace}) => ({
        value: state[namespace].data.email,
        errors: state[namespace].errors.email,
        allowEdit: state[namespace].uiux.allowEdit,
    }),
    (dispatch, {namespace}) => ({
        onChangeEmail: value => dispatch(onChangeEmail(namespace, value)),
    })
)(InputEmail);

// --- --- --- --- --- --- --- --- ---

export const MappedDivInputs = connect(
    (state, {namespace}) => ({
        errors: state[namespace].errors,
    }),
)(DivInputs);

export const MappedDivSignupInputs = connect(
    (state, {namespace}) => ({
        errors: state[namespace].errors,
    }),
)(DivSignupInputs);

export const MappedDivSigninInputs = connect(
    (state, {namespace}) => ({
        errors: state[namespace].errors,
    }),
)(DivSigninInputs);

// --- --- --- --- --- --- --- --- ---

export const MappedButtonSignup = connect(
    (state, {namespace, hostArgs}) => ({
        auth: state.auth,
        data: state[namespace].data,
        allowSave: state[namespace].uiux.allowSave,
        isLoading: state[namespace].uiux.isLoading,
    }),
    (dispatch, {namespace, hostArgs}) => ({
        onVerifyCreate: (auth, data) => dispatch(onVerifyCreate(namespace, hostArgs, auth, data)),
    })
)(ButtonSignup);

export const MappedButtonSignin = connect(
    (state, {namespace, hostArgs}) => ({
        auth: state.auth,
        data: state[namespace].data,
        allowSave: state[namespace].uiux.allowSave,
        isLoading: state[namespace].uiux.isLoading,
    }),
    (dispatch, {namespace, hostArgs}) => ({
        onVerifyRetrieve: (auth, data) => dispatch(onVerifyRetrieve(namespace, hostArgs, auth, data)),
    })
)(ButtonSignin);

// --- --- --- --- --- --- --- --- ---

export const MappedUsersForm = connect(
    state => ({
        namespace: 'users',
        mode: state['users'].uiux.mode,
    }), 
    dispatch => ({})
)(UsersForm);

export const MappedSignupForm = connect(
    state => ({
        namespace: 'users',
    }),
    dispatch => ({
        onSelectCreate: namespace => dispatch(onSelectCreate(namespace)),
    })
    )(SignupForm);

export const MappedSigninForm = connect(
    state => ({
        namespace: 'users',
    }), 
    dispatch => ({
        onSelectRetrieve: namespace => dispatch(onSelectRetrieve(namespace)),
    })
)(SigninForm);

export const MappedSignoutForm = connect(
    state => ({
        auth: state.auth,
    }),
    dispatch => ({
        onSignout: () => dispatch(onSignout()),
    })
)(SignoutForm);

/*
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

*/