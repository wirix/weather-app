import React from "react";
import { connect } from "react-redux"
import { setGeolocation, getMainData, getDataNextThreeHoursByCity, getDataNextThreeHours } from "../../redux/weather-reducer";
import Weather from "./Weather"
import { getMainDataByCity } from "../../redux/weather-reducer"

class WeatherContainer extends React.Component {
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (pos) => this.props.setGeolocation(pos.coords.latitude, pos.coords.longitude), 
      (err) => console.warn(`ERROR(${err.code}): ${err.message}`)
    )
  }

  componentDidUpdate(prevProps) {
    if (this.props.latitude !== prevProps.latitude) {
      this.props.getMainData(this.props.latitude, this.props.longitude)
      this.props.getDataNextThreeHours(this.props.latitude, this.props.longitude)
    }
  }
  
  render() {
    return <Weather {...this.props}/>
  }
}

let mapStateToProps = (state) => ({
  temperature: state.weather.temperature,
  latitude: state.weather.latitude,
  longitude: state.weather.longitude,
  city: state.weather.city,
})

export default connect(mapStateToProps, { setGeolocation, getDataNextThreeHours, getMainData, getMainDataByCity, getDataNextThreeHoursByCity })(WeatherContainer)