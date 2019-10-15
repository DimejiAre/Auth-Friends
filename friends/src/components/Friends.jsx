import React, {useEffect} from 'react';
import withAuth from '../axios';
import Friend from './Friend';

function Friends(props){
    const {friends, setFriends} = props

    useEffect(()=>{
        withAuth().get('http://localhost:5000/api/friends')
        .then(res => {
            setFriends(res.data)
        })
        .catch(error => {
            alert(error.message)
        })
    },[])

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