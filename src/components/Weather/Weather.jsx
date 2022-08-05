import styles from './Weather.module.css'
import stylesBtn from './../Form/Form.module.css'
import Form from '../Form/Form'
import { useState } from 'react'
import PredictsContainer from '../Predicts/PredictsContainer'
import Preloader from '../Preloader/Preloader'
import Card from './Card/Card'

const Weather = (props) => {
  let [editMode, setEditMode] = useState(false)
  if (!props.temperature) {
    return <Preloader />
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
        <Card description={props.description} temperature={props.temperature} city={props.city} icon={props.icon}/>
        <PredictsContainer />
      </div>
    </div>
  )
}

export default Weather