import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';
import Friend from './Friend';
import FriendForm from './FriendForm';
import './scss/Friends.scss';

function Friends(props) {
    const { friends, getFriends, setFriends } = props

    useEffect(() => {
        getFriends()
    }, [])

    return (
        <div className='friends-page'>
            <FriendForm setFriends={setFriends} />
            <div className='friends'>
                {
                    friends ?
                        friends.map(friend => (
                            <Friend key={friend.id} friend={friend} setFriends={setFriends} />
                        ))
                        : null
                }
            </div>
        </div>
    )
}

export default connect(
    state => state,
    actionCreators
)(Friends);