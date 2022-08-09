import styles from './Weather.module.css'
import stylesBtn from './../Form/Form.module.css'
import Form from '../Form/Form'
import { useState } from 'react'
import Preloader from '../Preloader/Preloader'
import PredictsContainer from '../Predicts/PredictsContainer'
import CardContainer from './Card/CardContainer'

const Weather = (props) => {
  let [editMode, setEditMode] = useState(false)
  if (!props.predicts) {
    return <Preloader />
  }
  const returnGeolocation = () => {
    props.setStartData(props.latitude, props.longitude)
  }

  const StaticForm = () => (
    <div className={styles.staticInput}>
      <div className={styles.input}>
        <i className="ri-map-pin-line" onClick={() => returnGeolocation()}></i>
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
        <CardContainer description={props.description} temperature={props.temperature} city={props.city} icon={props.icon}/>
        <PredictsContainer predicts={props.predicts} />
      </div>
    </div>
  )
}

export default Weather