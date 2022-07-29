import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk'
import WeatherReducer from "./weather-reducer";

let reducers = combineReducers({
  weather: WeatherReducer,
})

const store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store
export default store