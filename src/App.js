import { HashRouter, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import InfoContainer from './components/Info/InfoContainer';
import WeatherContainer from './components/Weather/WeatherContainer';

const App = (props) => {
  return (
    <HashRouter>
      <div className={styles.app}>
        <Routes>
          <Route path='/home/*' element={<WeatherContainer />} />
          <Route path='/info/*' element={<InfoContainer />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;