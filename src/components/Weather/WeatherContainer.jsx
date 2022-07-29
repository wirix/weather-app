import React from "react";
import { connect } from "react-redux"
import { setGeolocation } from "../../redux/weather-reducer";
import Weather from "./Weather"

class WeatherContainer extends React.Component {
  componentDidMount() {
    debugger
    navigator.geolocation.getCurrentPosition(
      (pos) => this.props.setGeolocation(pos.coords.latitude, pos.coords.longitude), 
      (err) => console.warn(`ERROR(${err.code}): ${err.message}`)
    );
  }

  render() {
    return <Weather {...this.props}/>
  }
}

let mapStateToProps = (state) => ({
  temperature: state.weather.temperature
})


export default connect(mapStateToProps, { setGeolocation })(WeatherContainer)