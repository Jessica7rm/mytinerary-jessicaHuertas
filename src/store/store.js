import { configureStore } from "@reduxjs/toolkit";
// import { citiesReducers } from './reducers/citiesReducers.js'

export const store = configureStore({
    reducer: {
       // cities : citiesReducers
    }
})

