import { takeLatest, call, put } from "redux-saga/effects";

import {actionTypes} from '../actionsTypes.constants';
import userModel from '../firebaseModels/userModel';

export default function* users() {
    yield takeLatest(actionTypes.FETCH_USERS, fetchUsers);
}

function* fetchUsers() {
    try {
        const usersSnapshot = yield call(userModel.fetchUsers);
        let data = [];
        usersSnapshot.forEach((user)=>{
            data.push({id:user.id,data:user.data()})
        });
        yield put({ type: actionTypes.FETCH_USERS_SUCCESS, data });
    } catch (error) {
      yield put({ type: actionTypes.FETCH_USERS_ERROR, error });
    }
}