import axios from "axios";

const url = axios.create({
    baseURL: 'http://localhost:3000/api'
});


export const getItinerariesCity = async (cityId) => {
    try {
        const {data} = await url("/city/itineraries/"+cityId)
        return data
    } catch (err){
        return []
    }
}