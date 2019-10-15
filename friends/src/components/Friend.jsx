import React from 'react';

function Friend(props){
    const {friend} = props
    return (
        <div>
            <p>{friend.name}</p>
        </div>
    )
}

export default Friend;