import axios from "axios"
import { setMainData } from "../redux/weather-reducer"
// ERRORS const instance = axios.create({
//   withCredentials: true,
//   baseURL: `https://api.openweathermap.org/`,
//   headers: {
//     'API-KEY': '144ff54241db4d0f0faa5f6ca8874136',
//   },
// })

let apiKey = '144ff54241db4d0f0faa5f6ca8874136'

export const currentWeather = {
  getCurrentData(latitude, longitude) {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=ru&units=metric&appid=${apiKey}`)
  }
}