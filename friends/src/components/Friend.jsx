import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';

function Friend(props) {
    const { friend, removeFriend, editFriendForm } = props

    return (
        <div className='friend'>
            <h3><strong>Name:</strong> {friend.name}</h3>
            <p><strong>Age: </strong>{friend.age}</p>
            <p><strong>Email:</strong> {friend.email}</p>
            <button onClick={e => editFriendForm(friend)}>Edit</button>
            <button onClick={e => removeFriend(friend.id)}>Delete</button>
        </div>
    )
}

export default connect(
    state => state,
    actionCreators
)(Friend);