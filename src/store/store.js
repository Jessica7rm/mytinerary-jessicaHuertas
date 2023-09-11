import { configureStore } from "@reduxjs/toolkit";
import citiesReducers from './reducers/citiesReducers.js'
import itinerariesReducers from "./reducers/itinerariesReducers.js";
import usersReducers from "./reducers/usersReducers.js";

export const store = configureStore({
    reducer: {
       citiesReducers,
       itinerariesReducers,
       usersReducers,
    }
})

