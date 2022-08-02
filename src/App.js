import { BrowserRouter } from 'react-router-dom';
import styles from './App.module.css';
import WeatherContainer from './components/Weather/WeatherContainer';
import { setGeolocation } from './redux/weather-reducer.js'

const App = (props) => {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <WeatherContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;