/*USERS*/
import {all, call, fork, put, takeEvery} from 'redux-saga/effects';
import {fetchJSON, apiOptions} from "../../helpers/api";

import {GET_USERS_LIST} from './constants';
import {
    setUsersList,
    setUsersError,
    setUserListStatus
} from './actions';
import {removeDuplicates} from "../../helpers/utils";
import {ERROR_MESSAGE} from '../constants';

function* fetchUsersList({payload: dataSize }) {
    try {
        yield put(setUserListStatus());
        const response = yield call(
            fetchJSON, dataSize,
            apiOptions('GET')
        );
        if (response !== []) {
            const userListNoDuplicate = removeDuplicates(response, 'id');
            yield put(setUsersList(userListNoDuplicate));
        } else {
            yield put(setUsersError(ERROR_MESSAGE));
            yield put(setUserListStatus())
        }
    } catch(error) {
        let message;
        switch (error.status) {
            case 500:
                message = 'Internal Server Error';
                break;
            case 401:
                message = 'Invalid credentials';
                break;
            default:
                message = ERROR_MESSAGE;
        }
        yield put(setUsersError(message))
    }
}

function* watchFetchUserList() {
    yield takeEvery(GET_USERS_LIST, fetchUsersList);
}

export default function* usersSaga() {
    yield all([
        fork(watchFetchUserList)
    ])
}