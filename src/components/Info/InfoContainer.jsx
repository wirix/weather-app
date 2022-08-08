import { connect } from "react-redux"
import { compose } from "redux"
import withAddNum from "../../hoc/withAddNum"
import withArraysOfDate from "../../hoc/withArraysOfDate"
import withRouter from "../../hoc/withRouter"
import { getPredictsSelector } from "../../redux/weather-selectors"
import Info from './Info'

let mapStateToProps = (state) => ({
  temperature: state.weather.temperature,
  city: state.weather.city,
  description: state.weather.description,
  icon: state.weather.icon,
  aqi: state.weather.aqi,
  pressure: state.weather.pressure,
  humidity: state.weather.humidity,
  wind: state.weather.wind,
  clouds: state.weather.clouds,
  predicts: getPredictsSelector(state)
})

let InfoContainer = compose(connect(mapStateToProps, null), withRouter, withArraysOfDate, withAddNum)(Info)

export default InfoContainer