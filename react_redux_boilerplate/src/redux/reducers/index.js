import { combineReducers } from 'redux';
import { ALL_USERS, SET_USER } from '../actions/index';

function users(state = [], action) {
    switch (action.type) {
        case ALL_USERS:
            return action.users;
        default:
            return state;
    }
}

function user(state = {}, action) {
    switch (action.type) {
        case SET_USER:
            return action.user;
        default:
            return state;
    }
}
export default combineReducers({ users, user });