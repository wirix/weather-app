import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import styles from './App.module.css';
import ErrorPage from './components/ErrorPage/ErrorPage';
import InfoContainer from './components/Info/InfoContainer';
import InfoLowerContainer from './components/Info/InfoLower/InfoLowerContainer';
import WeatherContainer from './components/Weather/WeatherContainer';

const App = (props) => {
  return (
    <HashRouter>
      <div className={styles.app}>
        <Routes>
          <Route path='/' index element={<Navigate to='/home' />} />
          <Route path='/home/*' element={<WeatherContainer />} />
          <Route path='/info/:list' element={<InfoContainer />} >
            <Route path=':time' element={<InfoLowerContainer />} />
          </Route>
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;