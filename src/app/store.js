import { configureStore } from "@reduxjs/toolkit";
import rootSaga from "../rootSaga";
import createSagaMiddleware from "@redux-saga/core";
import marvelHeroesReducer from "../marvelHeroesSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    marvelHeroes: marvelHeroesReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
