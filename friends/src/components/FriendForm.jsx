import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';
import './scss/FriendForm.scss';

function FriendForm(props) {

    const { editFriend, friendsForm, createFriend, friendsInputChange } = props;

    const submit = e => {
        e.preventDefault();
        if (friendsForm.id) {
            editFriend(friendsForm)
        } else {
            createFriend(friendsForm)
        }

    }

    return (
        <form className='friend-form'>
            <h4>Add Friend</h4>
            <label>
                Name:
                <input value={friendsForm.name} onChange={friendsInputChange} name='name' type='text' placeholder='name' />
            </label>
            <label>
                Age:
                 <input value={friendsForm.age} onChange={friendsInputChange} name='age' type='text' placeholder='age' />
            </label>
            <label>
                Email:
                 <input value={friendsForm.email} onChange={friendsInputChange} name='email' type='text' placeholder='email' />
            </label>
            <button type='submit' onClick={submit}>Enter</button>
        </form>
    )
}

export default connect(
    state => state,
    actionCreators
)(FriendForm);