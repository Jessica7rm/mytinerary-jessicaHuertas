import { createReducer } from "@reduxjs/toolkit";
import getItinerariesAction from "../actions/itinerariesActions"

const initialState = {
  itineraries: []
}

const itinerariesReducers = createReducer(initialState, (builder) => {
    return builder
    .addCase(getItinerariesAction.get_itineraries, (state, action) => {
       const newState = { ...state, itineraries: action.payload.itineraries}
       return newState
    })
  });

export default itinerariesReducers