import { currentWeather } from "../api/api"

const SET_GEOLOCATION = 'SET_GEOLOCATION'
const SET_MAIN_DATA = 'SET_MAIN_DATA'
const SET_DATA_NEXT_THREE_HOURS_BY_CITY = 'GET_DATA_NEXT_THREE_HOURS_BY_CITY'

let initialState = {
  latitude: null,
  longitude: null,
  temperature: null,
  city: null,
  predicts: null,
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
    case SET_DATA_NEXT_THREE_HOURS_BY_CITY:
      return {
        ...state,
        predicts: action.predicts
      }
    default:
      return state
  }
}

export const setGeolocation = (latitude, longitude) => ({ type: SET_GEOLOCATION, latitude, longitude })
export const setMainData = (temperature, city) => ({ type: SET_MAIN_DATA, temperature, city })
export const setDataNextThreeHours = (predicts) => ({ type: SET_DATA_NEXT_THREE_HOURS_BY_CITY, predicts})

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
}

export const getDataNextThreeHours = (latitude, longitude) => async (dispatch) => {
  let response = await currentWeather.getDataNextThreeHours(latitude, longitude)
  dispatch(setDataNextThreeHours(response.data.list))
}

export const getDataNextThreeHoursByCity = (city) => async (dispatch) => {
  let response = await currentWeather.getDataNextThreeHoursByCity(city)
  dispatch(setDataNextThreeHours(response.data.list))
}

export default WeatherReducer