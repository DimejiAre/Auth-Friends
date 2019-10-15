import React from 'react';

function Friend(props) {
    const { friend } = props
    return (
        <div className='friend'>
            <h3><strong>Name:</strong> {friend.name}</h3>
            <p><strong>Age: </strong>{friend.age}</p>
            <p><strong>Email:</strong> {friend.email}</p>
        </div>
    )
}

export default Friend;