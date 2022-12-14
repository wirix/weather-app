import React from "react";
import { connect } from "react-redux"
import { setGeolocation, getMainData, getDataNextThreeHoursByCity, getDataNextThreeHours, setForecastAQI, setStartData } from "../../redux/weather-reducer";
import Weather from "./Weather"
import { getMainDataByCity } from "../../redux/weather-reducer"
import Preloader from "../Preloader/Preloader";

class WeatherContainer extends React.Component {
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (pos) => this.props.setGeolocation(pos.coords.latitude, pos.coords.longitude), 
      (err) => console.warn(`ERROR(${err.code}): ${err.message}`)
    )
  }

  componentDidUpdate(prevProps) {
    if (this.props.latitude !== prevProps.latitude) {
      this.props.setStartData(this.props.latitude, this.props.longitude)
    }
  }
  
  render() {
    return (
      <>
        {
          (this.props.predicts && this.props.icon === null)
          ? <Preloader />
          : <Weather {...this.props}/>
        }
      </>
    )
  }
}

let mapStateToProps = (state) => ({
  temperature: state.weather.temperature,
  latitude: state.weather.latitude,
  longitude: state.weather.longitude,
  city: state.weather.city,
  predicts: state.weather.predicts,
  description: state.weather.description,
  icon: state.weather.icon,
})

let mapDispatchToProps = { setGeolocation, setStartData, getDataNextThreeHours, getMainData, getMainDataByCity, getDataNextThreeHoursByCity, setForecastAQI }

export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainer)