import { createReducer } from "@reduxjs/toolkit";
import getCitiesAction from "../actions/citiesActions";

const initialState = {
  cities: [],
  oneCity: []
}

const citiesReducers = createReducer(initialState, (builder) => {
    return builder
    .addCase(getCitiesAction.get_cities, (state, action) => {
       const newState = { ...state, cities: action.payload.cities}
       return newState
    })
    .addCase(getCitiesAction.get_city, (state, action) => {
      const newState = { ...state, oneCity: action.payload.city}
      return newState
    })
  });

export default citiesReducers