import styles from './Weather.module.css'
import stylesBtn from './../Form/Form.module.css'
import stormImg from './../../assets/weather-icons/night_storm.png'
import Form from '../Form/Form'
import { useState } from 'react'
import PredictsContainer from '../Predicts/PredictsContainer'
import Preloader from '../Preloader/Preloader'

const Weather = (props) => {
  let [editMode, setEditMode] = useState(false)
  if (!props.temperature) {
    return <Preloader />
  }

  const integer = (num) => {
    return num.toFixed(0)
  }

  const StaticForm = () => (
    <div className={styles.staticInput}>
      <div className={styles.input}>
        <i className="ri-map-pin-line"></i>
        <div className={styles.input__text}>{props.city}</div>
      </div>
      <button className={stylesBtn.btn__send} type={'submit'} onClick={() => setEditMode(true)}>
        <i className="ri-search-line"></i>
      </button>
    </div>
  )

  return (
    <div className={styles.weather}>
      <div className={styles.container}>
        {
          editMode
            ? <Form getMainDataByCity={props.getMainDataByCity}
              setEditMode={setEditMode}
              getDataNextThreeHoursByCity={props.getDataNextThreeHoursByCity} />
            : <StaticForm />
        }
        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.day}>Senin, 20 Desember 2021</div>
            <div className={styles.time}>10.30 PM</div>
          </div>
          <div className={styles.current__data}>
            <img alt='' src={stormImg} />
            <div className={styles.data}>
              <div className={styles.temperature}>{integer(props.temperature)}º C</div>
              <div className={styles.city}>{props.city}</div>
            </div>
          </div>
          <div className={styles.update}>
            Next update 8.00 PM
            <i className="ri-restart-line"></i>
          </div>
        </div>
        <PredictsContainer />
      </div>
    </div>
  )
}

export default Weather