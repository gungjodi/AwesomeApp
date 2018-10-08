import { takeLatest, call, put, all } from "redux-saga/effects";

import api from '../apiRequest';
import {actionTypes} from '../actionsTypes.constants';

export default function* people() {
    yield all([
        yield takeLatest(actionTypes.FETCH_PEOPLE, fetchPeople),
        yield takeLatest(actionTypes.FETCH_PEOPLE_DETAIL, fetchPeopleDetail),
    ]);
    
}

function* fetchPeople(action) {
    try {
      const response = yield call(api.getPeople,action.url);
      const data = response.data;
      yield put({ type: actionTypes.FETCH_PEOPLE_SUCCESS, data });
    } catch (error) {
      yield put({ type: actionTypes.FETCH_PEOPLE_ERROR, error });
    }
}

function* fetchPeopleDetail(action) {
    try {
        const response = yield call(api.getPeopleDetail,action.url);
        const data = response.data;
        yield put({ type: actionTypes.FETCH_PEOPLE_DETAIL_SUCCESS, data });
    } catch (error) {
        yield put({ type: actionTypes.FETCH_PEOPLE_DETAIL_ERROR, error });
    }
}