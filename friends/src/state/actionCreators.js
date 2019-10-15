import * as types from '../state/actionTypes';
import axios from 'axios';
import withAuth from '../axios';


const friendsApi = 'http://localhost:5000/api/friends';
const loginApi = 'http://localhost:5000/api/login';

export const addFriends = friends => {
    return {
        type: types.ADD_FRIENDS,
        payload: friends
    }
}

export const getFriends = () => dispatch => {
    withAuth().get(friendsApi)
    .then(res => {
        dispatch(addFriends(res.data));
    })
}

export const removeFriend = id => dispatch => {
    withAuth().delete(friendsApi + "/" +id)
    .then(res => {
        dispatch(addFriends(res.data));
    })
}

export const editFriend = friendsForm => dispatch => {
    const params = {
        name: friendsForm.name,
        age: Number(friendsForm.age),
        email: friendsForm.email
    }
    withAuth().put(friendsApi + "/" + friendsForm.id, params)
    .then(res => {
        dispatch(addFriends(res.data));
        dispatch({type: types.ON_SUBMIT})
    })
    .catch(error => {
        dispatch({type: types.ON_SUBMIT})
        alert(error.message);
    })
}



export const editFriendForm = friend => {
    return {
        type: types.EDIT_FRIENDS,
        payload: friend
    }
}

export const login = (loginForm, props) => dispatch => {
    axios.post(loginApi, loginForm)
    .then(res => {
        localStorage.setItem('token', res.data.payload)
        dispatch({type: types.ON_SUBMIT})
        props.history.push('/friends')
    })
    .catch(error => {
        dispatch({type: types.ON_SUBMIT})
        alert(error.message);
    })
}

export const loginInputChange = e => {
    return {
        type: types.ON_INPUT_CHANGE,
        payload: e.target
    }
}

export const friendsInputChange = e => {
    return {
        type: types.ON_FRIENDS_INPUT_CHANGE,
        payload: e.target
    }
}

export const createFriend = friendsForm => dispatch => {
    const params = {
        name: friendsForm.name,
        age: Number(friendsForm.age),
        email: friendsForm.email
    }
    withAuth().post(friendsApi, params)
    .then(res => {
        dispatch(addFriends(res.data))
        dispatch({type: types.ON_SUBMIT})
    })
    .catch(error => {
        dispatch({type: types.ON_SUBMIT})
        alert(error.message);
    })
}