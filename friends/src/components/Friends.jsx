import React, { useEffect } from 'react';
import withAuth from '../axios';
import Friend from './Friend';
import FriendForm from './FriendForm';
import './scss/Friends.scss';

function Friends(props) {
    const { friends, setFriends } = props

    useEffect(() => {
        withAuth().get('http://localhost:5000/api/friends')
            .then(res => {
                setFriends(res.data)
            })
            .catch(error => {
                alert(error.message)
            })
    }, [friends])

    return (
        <div className='friends-page'>
            <FriendForm setFriends={setFriends} />
            <div className='friends'>
                {
                    friends ?
                        friends.map(friend => (
                            <Friend key={friend.id} friend={friend} />
                        ))
                        : null
                }
            </div>
        </div>
    )
}

export default Friends;