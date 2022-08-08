import { createSelector } from 'reselect'

const getPredicts = (state) => {
  return state.weather.predicts
}

export const getPredictsSelector = createSelector(getPredicts, (item => {
  let sortedPredicts = []
  for (let i = 0; i < 5; i++) {
    sortedPredicts = [...sortedPredicts, item.filter(p => new Date().getDate() + i === new Date(p.dt_txt).getDate())]
  }
  return sortedPredicts
}))