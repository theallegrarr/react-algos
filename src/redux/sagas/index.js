import { all } from "redux-saga/effects";
import { nextWatcher } from "./bfs";

export default function* rootSaga() {
    yield all([
        nextWatcher(),
    ]);
}