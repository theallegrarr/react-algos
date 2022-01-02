import { put, takeEvery } from 'redux-saga/effects';
import { moveToNext } from '../actions/bfs';
import * as types from '../types';

export function* nextWatcher() {
    yield takeEvery(types.NEXT, nextWorker);
}

export function* nextWorker() {
    yield put(moveToNext());
}