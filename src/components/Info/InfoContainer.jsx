import { connect } from "react-redux"
import { compose } from "redux"
import withRouter from "../../hoc/withRouter"
import Info from './Info'

let mapStateToProps = (state) => ({
  temperature: state.weather.temperature,
  city: state.weather.city,
  predicts: state.weather.predicts,
  description: state.weather.description,
  icon: state.weather.icon,
  aqi: state.weather.aqi,
  pressure: state.weather.pressure,
  humidity: state.weather.humidity,
  wind: state.weather.wind,
  clouds: state.weather.clouds,
})

let InfoContainer = compose(connect(mapStateToProps, null), withRouter)(Info)

export default InfoContainer