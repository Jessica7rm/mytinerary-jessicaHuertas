import { configureStore } from "@reduxjs/toolkit";
import citiesReducers from './reducers/citiesReducers.js'
import itinerariesReducers from "./reducers/itinerariesReducers.js";

export const store = configureStore({
    reducer: {
       citiesReducers,
       itinerariesReducers
    }
})

