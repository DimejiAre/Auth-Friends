import * as types from './actionTypes';

const initialFriends = [];
const initialLoginForm = {username: '', password: ''};
const initialFriendsForm = {name:'', age: '', email: '', id: ''};


export const friendsReducer = (state=initialFriends, action) => {
    switch(action.type){
        case types.ADD_FRIENDS:
            return action.payload;
        default:
            return state;
    }
}

export const loginFormReducer = (state=initialLoginForm, action) => {
    switch(action.type){
        case types.ON_INPUT_CHANGE:
            return {
                ...state, [action.payload.name] : action.payload.value
            }
        case types.ON_SUBMIT:
            return initialLoginForm;
        default:
            return state;
    }
}

export const friendsFormReducer = (state=initialFriendsForm, action) => {
    switch(action.type){
        case types.ON_FRIENDS_INPUT_CHANGE:
            return {
                ...state, [action.payload.name] : action.payload.value
            }
        case types.EDIT_FRIENDS:
            return action.payload;
        case types.ON_SUBMIT:
            return initialFriendsForm;
        default:
            return state;
    }
}