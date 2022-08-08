import { currentWeather } from "../api/api"

const SET_GEOLOCATION = 'SET_GEOLOCATION'
const SET_MAIN_DATA = 'SET_MAIN_DATA'
const SET_DATA_NEXT_THREE_HOURS_BY_CITY = 'GET_DATA_NEXT_THREE_HOURS_BY_CITY'
const GET_FORECAST_AQI = 'GET_FORECAST_AQI'

let initialState = {
  latitude: null,
  longitude: null,
  temperature: null,
  city: null,
  predicts: null,
  description: null,
  icon: null,
  aqiForecast: null,
  pressure: null,
  humidity: null,
  wind: null,
  clouds: null,
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
        temperature: Math.round(action.temperature),
        city: action.city,
        description: action.description,
        icon: action.icon,
        pressure: action.pressure,
        humidity: action.humidity,
        wind: action.wind,
        clouds: action.clouds,
      }
    case SET_DATA_NEXT_THREE_HOURS_BY_CITY:
      return {
        ...state,
        predicts: action.predicts
      }
    case GET_FORECAST_AQI:
      return {
        ...state,
        aqiForecast: action.aqiForecast
      }
    default:
      return state
  }
}

export const setGeolocation = (latitude, longitude) => ({ type: SET_GEOLOCATION, latitude, longitude })
export const setMainData = (temperature, city, description, icon, pressure, humidity, wind, clouds) => ({ type: SET_MAIN_DATA, temperature, city, description, icon, pressure, humidity, wind, clouds })
export const setDataNextThreeHours = (predicts) => ({ type: SET_DATA_NEXT_THREE_HOURS_BY_CITY, predicts })
export const getForecastAQI = (aqiForecast) => ({ type: GET_FORECAST_AQI, aqiForecast })

export const getMainData = (latitude, longitude) => async (dispatch) => {
  let response = await currentWeather.getCurrentData(latitude, longitude)
  let data = response.data
  dispatch(setMainData(data.main.temp, data.name, data.weather[0].description, data.weather[0].icon, data.main.pressure, data.main.humidity, data.wind.speed, data.clouds.all))
}

export const getMainDataByCity = (city) => async (dispatch) => {
  let response = await currentWeather.getCurrentDataByCity(city)
  let data = response.data
  dispatch(setMainData(data.main.temp, data.name, data.weather[0].description, data.weather[0].icon, data.main.pressure, data.main.humidity, data.wind.speed, data.clouds.all))
}

export const getDataNextThreeHours = (latitude, longitude) => async (dispatch) => {
  let response = await currentWeather.getDataNextThreeHours(latitude, longitude)
  dispatch(setDataNextThreeHours(response.data.list))
}

export const getDataNextThreeHoursByCity = (city) => async (dispatch) => {
  let response = await currentWeather.getDataNextThreeHoursByCity(city)
  dispatch(setDataNextThreeHours(response.data.list))
}

export const setForecastAQI = (latitude, longitude) => async (dispatch) => {
  let response = await currentWeather.getForecastAQI(latitude, longitude)
  dispatch(getForecastAQI(response.data))
}

export default WeatherReducer