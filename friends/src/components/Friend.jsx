import React from 'react';
import withAuth from '../axios';

function Friend(props) {
    const { friend, setFriends } = props

    const removeFriend = e => {
        debugger
        withAuth().delete('http://localhost:5000/api/friends/' + friend.id)
        .then(res => {
            setFriends(res.data)
        })

    }

    return (
        <div className='friend'>
            <h3><strong>Name:</strong> {friend.name}</h3>
            <p><strong>Age: </strong>{friend.age}</p>
            <p><strong>Email:</strong> {friend.email}</p>
            <button onClick={removeFriend}>Delete</button>
        </div>
    )
}

export default Friend;