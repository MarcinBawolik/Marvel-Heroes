import { all } from "redux-saga/effects"
import { marvelHeroesSaga } from "./marveHeroesSaga";

export default function* rootSaga() {
    yield all([marvelHeroesSaga()]);
}