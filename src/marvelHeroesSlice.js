import { createSlice } from "@reduxjs/toolkit";

const marvelHeroesSlice = createSlice({
  name: "marvelHeroes",
  initialState: {
    heroes: null,
    status: "initial",
  },
  reducers: {
    fetchHeroes: () => ({
      heroes: null,
      status: "loading",
    }),
    fetchHeroesSuccess: (_, { payload: heroes }) => ({
      heroes,
      status: "success",
    }),
    fetchHeroesError: () => ({
      heroes: null,
      status: "error",
    }),
  },
});

export const { fetchHeroes, fetchHeroesSuccess, fetchHeroesError } =
  marvelHeroesSlice.actions;

const selectMarvelHeroesState = (state) => state.marvelHeroes;

export const selectHeroes = (state) => selectMarvelHeroesState(state).heroes;
export const selectHeroesStatus = (state) =>
  selectMarvelHeroesState(state).status;

export default marvelHeroesSlice.reducer;
