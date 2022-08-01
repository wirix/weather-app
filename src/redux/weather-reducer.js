import { currentWeather } from "../api/api"

const SET_GEOLOCATION = 'SET_GEOLOCATION'
const SET_MAIN_DATA = 'SET_MAIN_DATA'

let initialState = {
  latitude: null,
  longitude: null,
  temperature: null,
  city: null,
}

const WeatherReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_GEOLOCATION:
      return {
        ...state,
        latitude: action.latitude,
        longitude: action.longitude
      }
    case SET_MAIN_DATA:
      return {
        ...state,
        temperature: action.temperature,
        city: action.city,
      }
    default:
      return state
  }
}

export const setGeolocation = (latitude, longitude) => ({ type: SET_GEOLOCATION, latitude, longitude })
export const setMainData = (temperature, city) => ({ type: SET_MAIN_DATA, temperature, city })

export const getMainData = (latitude, longitude) => async (dispatch) => {
  let response = await currentWeather.getCurrentData(latitude, longitude)
  let data = response.data
  dispatch(setMainData(data.main.temp, data.name))
  console.log(response)
}

export const getMainDataByCity = (city) => async (dispatch) => {
  let response = await currentWeather.getCurrentDataByCity(city)
  let data = response.data
  dispatch(setMainData(data.main.temp, data.name))
  console.log(response)
}

export default WeatherReducer