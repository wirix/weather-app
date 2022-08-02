import axios from "axios"
// ERRORS const instance = axios.create({
//   withCredentials: true,
//   baseURL: `https://api.openweathermap.org/`,
//   headers: {
//     'API-KEY': '144ff54241db4d0f0faa5f6ca8874136',
//   },
// })
let base = {
  url: 'https://api.openweathermap.org/data/2.5/',
  key: '144ff54241db4d0f0faa5f6ca8874136',
  params: 'lang=ru&units=metric'
}

export const currentWeather = {
  getCurrentData(latitude, longitude) {
    return axios.get(`${base.url}weather?${base.params}&appid=${base.key}&lat=${latitude}&lon=${longitude}`)
  },
  getCurrentDataByCity(city) {
    return axios.get(`${base.url}weather?${base.params}&appid=${base.key}&q=${city}`)
  },
  getDataNextThreeHours(latitude, longitude) {
    return axios.get(`${base.url}forecast?${base.params}&appid=${base.key}&lat=${latitude}&lon=${longitude}`)
  },
  getDataNextThreeHoursByCity(city) {
    return axios.get(`${base.url}forecast?${base.params}&appid=${base.key}&q=${city}`)
  },
}