import { connect } from 'react-redux';
import { Users, Signup, Signin } from './components.jsx';
import {
    onSelectCreate,
    onSelectRetrieve,
    onSelectUpdate,
    onVerifyUpdate,
	onSelectDelete,
    onVerifyDelete,
    onExit,
} from '../core/actions.js';

import {
    onSignin,
} from '../root/actions.js';

import {
    onVerifyCreate,
    onVerifyRetrieve,

	onChangeUsername,
	onChangePassword,
	onChangePassword2,
	onChangeEmail,
} from './actions.js';

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
            onExit: id => dispatch(onExit(id)),

            onChangeUsername: (id, username) => dispatch(onChangeUsername(id, username)),
            onChangePassword: (id, password) => dispatch(onChangePassword(id, password)),
            onChangePassword2: (id, password2) => dispatch(onChangePassword2(id, password2)),
            onChangeEmail: (id, email) => dispatch(onChangeEmail(id, email)),
        }
    };
}

const mapStateToPropsSign = state => {
    let retval = {
        globals: {...state.globals},
        newItem: {...state.users.newItem},
    };

    if (retval.newItem.uiux.enableEdit === null)
        retval.newItem.uiux.enableEdit = true;

    return retval;
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);


const mapDispatchToPropsSignup = dispatch => {
    return {
        actions: {
            onVerifyCreate: (globals, data) => dispatch(onVerifyCreate(globals, data)),
            onExit: (id, initialData) => dispatch(onExit(id, initialData)),

            onChangeUsername: (id, username) => dispatch(onChangeUsername(id, username)),
            onChangePassword: (id, password) => dispatch(onChangePassword(id, password)),
            onChangePassword2: (id, password2) => dispatch(onChangePassword2(id, password2)),
            onChangeEmail: (id, email) => dispatch(onChangeEmail(id, email)),
        }
    };
}

const mapDispatchToPropsSignin = dispatch => {
    return {
        actions: {
            onSignin: (user, token) => dispatch(onSignin(user, token)),
            onVerifyRetrieve: (globals, data) => dispatch(onVerifyRetrieve(globals, data)),
            onExit: (id, initialData) => dispatch(onExit(id, initialData)),

            onChangeUsername: (id, username) => dispatch(onChangeUsername(id, username)),
            onChangePassword: (id, password) => dispatch(onChangePassword(id, password)),
        }
    };
}

export const SignupContainer = connect(mapStateToPropsSign, mapDispatchToPropsSignup)(Signup);

export const SigninContainer = connect(mapStateToPropsSign, mapDispatchToPropsSignin)(Signin);
