/*USERS*/
import {
    GET_USERS_LIST,
    SET_USERS_LIST,
    SET_USERS_ERROR,
    ADD_USER_STATUS,
    NEW_USER_DATA,
    SET_USER_LIST_STATUS,
    SET_SELECT_DATA
} from './constants';

export const getUsersList = dataSize => ({
    type: GET_USERS_LIST,
    payload: dataSize
});
export const setUsersList = data => ({
    type: SET_USERS_LIST,
    data
});
export const setUsersError = data => ({
    type: SET_USERS_ERROR,
    data
});
export const setAddUserStatus = () => ({
    type: ADD_USER_STATUS
});
export const setNewUserData = data => ({
    type: NEW_USER_DATA,
    data
});
export const setUserListStatus = () => ({
    type: SET_USER_LIST_STATUS
});
export const setSelectData = data => ({
    type: SET_SELECT_DATA,
    data
});


