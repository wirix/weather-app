import { connect } from "react-redux"
import Info from './Info'

let mapStateToProps = (state) => ({
  temperature: state.weather.temperature,
  city: state.weather.city,
  predicts: state.weather.predicts,
  description: state.weather.description,
  icon: state.weather.icon,
})

let InfoContainer = connect(mapStateToProps, null)(Info)

export default InfoContainer