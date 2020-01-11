import React from 'react';

import {
    GroupInputUsername,
    GroupInputPassword,
    GroupInputPassword2,
    GroupInputEmail,
} from '../../users/components/inputs.jsx';

// --- --- --- --- --- --- --- --- ---

export const GroupSignupInputs = ({errors}) => {

    return (
        <div className='edit'>
            <span className='message'>{errors?errors:''}</span>
            <GroupInputUsername />
            <GroupInputPassword />
            <GroupInputPassword2 />
            <GroupInputEmail />
        </div>
    )
}

export const GroupSigninInputs = ({errors}) => {

    return (
        <div className='edit'>
            <span className='message'>{errors?errors:''}</span>
            <GroupInputUsername />
            <GroupInputPassword />
        </div>
    )
}
