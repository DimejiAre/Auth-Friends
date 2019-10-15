import React from 'react';
import Friend from './Friend';

function Friends(props){
    const {friends} = props
    return (
        <div>
            {
                friends?
                friends.map(friend => (
                    <Friend key={friend.id} friend={friend}/>
                ))
                : null
            }
        </div>
    )
}

export default Friends;