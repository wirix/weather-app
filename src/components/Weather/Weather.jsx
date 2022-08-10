import styles from './Weather.module.css'
import stylesBtn from './../Form/Form.module.css'
import Form from '../Form/Form'
import { useState } from 'react'
import Preloader from '../Preloader/Preloader'
import PredictsContainer from '../Predicts/PredictsContainer'
import CardContainer from './Card/CardContainer'
// import { CSSTransition } from 'react-transition-group'

const Weather = (props) => {
  let [editMode, setEditMode] = useState(false)
  // let [menu, setMenu] = useState(false)
  // useEffect(() => {

  // }, [menu])

  if (!props.predicts) {
    return <Preloader />
  }
  const returnGeolocation = () => {
    props.setStartData(props.latitude, props.longitude)
  }

  // const openMenu = (bool) => {
  //   setMenu(bool)
  // }

  // const MenuContent = () => {
  //   return (
  //     <div className={styles.open}>
  //       ffff
  //       <i className="ri-close-line" onClick={() => openMenu(false)}></i>
  //     </div>
  //   )
  // }

  const StaticForm = () => (
    <div className={styles.staticInput}>
      <i className="ri-menu-line"
      //  onClick={() => openMenu(true)}
       ></i>
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
        <PredictsContainer />
      </div>
    </div>
  )
}

export default Weather