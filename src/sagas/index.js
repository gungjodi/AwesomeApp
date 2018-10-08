import {all } from "redux-saga/effects";

import users from './users.saga';
import people from './people.saga';

export default function* rootSaga() {
    yield all([
        users(),
        people()
    ]);
}