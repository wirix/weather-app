import axios from "axios"

export const currentWeather = {
  getCurrentData() {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`)
      .then(response => {
        
      })
  }
}