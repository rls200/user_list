/*USERS*/
import {
    SET_USERS_LIST,
    SET_USERS_ERROR,
    ADD_USER_STATUS,
    NEW_USER_DATA,
    SET_USER_LIST_STATUS,
    SET_SELECT_DATA,
} from './constants';

const initialState = {
    usersList: '',
    error: '',
    selectData: '',
    addUserStatus: false,
    getUserListStatus: false,
};

const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS_LIST:
            return {
                ...state,
                usersList: action.data,
                getUserListStatus: !state.getUserListStatus
            };
        case SET_USERS_ERROR:
            return {
                ...state,
                error: action.data
            };
        case ADD_USER_STATUS:
            return {
                ...state,
                addUserStatus: !state.addUserStatus
            };
        case NEW_USER_DATA:
            return {
                ...state,
                usersList: [{...action.data} ,...state.usersList],
                addUserStatus: !state.addUserStatus
            };
        case SET_USER_LIST_STATUS:
            return {
                ...state,
                getUserListStatus: !state.getUserListStatus,
                selectData: ''
            };
        case SET_SELECT_DATA:
            return {
                ...state,
                selectData: action.data
            };
        default:
            return {...state}
    }
};

export default UsersReducer;
