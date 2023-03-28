import { call, takeLatest, put, delay } from "redux-saga/effects";
import {
  fetchHeroes,
  fetchHeroesSuccess,
  fetchHeroesError,
} from "./marvelHeroesSlice";
import { getMarvelHeroes } from "./getMarvelHeroes";

function* fetchMarvelHeroesHandler() {
  try {
    yield delay(2000); //just to show loading status
    const heroes = yield call(getMarvelHeroes);
    yield put(fetchHeroesSuccess(heroes));
  } catch (error) {
    yield put(fetchHeroesError());
  }
}

export function* marvelHeroesSaga() {
  yield takeLatest(fetchHeroes.type, fetchMarvelHeroesHandler);
}
