const SET_GEOLOCATION = 'SET_GEOLOCATION'

let initialState = {
  latitude: null,
  longitude: null,
  temperature: null,
  xxx: 100,
}

const WeatherReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_GEOLOCATION:
      debugger
      return {
        ...state,
        latitude: action.latitude,
        longitude: action.longitude
      }
    default:
      return state
  }
}

export const setGeolocation = (latitude, longitude) => ({ type: SET_GEOLOCATION, latitude, longitude })

export default WeatherReducer