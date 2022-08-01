import axios from "axios"
// ERRORS const instance = axios.create({
//   withCredentials: true,
//   baseURL: `https://api.openweathermap.org/`,
//   headers: {
//     'API-KEY': '144ff54241db4d0f0faa5f6ca8874136',
//   },
// })

let apiKey = '144ff54241db4d0f0faa5f6ca8874136'
let currentBaseURL = `https://api.openweathermap.org/data/2.5/weather?lang=ru&units=metric&appid=${apiKey}&`

export const currentWeather = {
  getCurrentData(latitude, longitude) {
    return axios.get(`${currentBaseURL}lat=${latitude}&lon=${longitude}`)
  },
  getCurrentDataByCity(city) {
    return axios.get(`${currentBaseURL}q=${city}`)
  },
  getDataNextThreeHours(city) {
    // return axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${'Moscow'}&appid=${apiKey}`)
  }
}