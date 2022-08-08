import { createSelector } from 'reselect'

const aqiForecast = (state) => {
  return state.weather.aqiForecast
}

export const getAQI = createSelector(aqiForecast, (item => {
  let sortedForecastAQI = []
  for (let i = 0; i < item.list.length / 24; i++) {
    sortedForecastAQI = [...sortedForecastAQI, item.list.filter(s => new Date(s.dt * 1000).getDate() === new Date().getDate() + i)]
  }
  return sortedForecastAQI
}))