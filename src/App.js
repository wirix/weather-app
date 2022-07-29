import { BrowserRouter } from 'react-router-dom';
import styles from './App.module.css';
import WeatherContainer from './components/Weather/WeatherContainer';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <input />
        <WeatherContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;