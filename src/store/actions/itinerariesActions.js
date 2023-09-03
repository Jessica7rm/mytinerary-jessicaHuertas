import { createAction } from "@reduxjs/toolkit";

const get_itineraries = createAction('get_itineraries', (array) => {
    return {
        payload: {
            itineraries: array
        }
    }
})

const getItinerariesAction = { get_itineraries }

export default getItinerariesAction
