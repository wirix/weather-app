import styles from './Info.module.css'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import reloadStatic from '../../assets/ReloadStatic.svg'
import reloadAnimated from '../../assets/ReloadAnimated.svg'
import SwiperItems from '../Predicts/PredictsItem/SwiperItems/SwiperItems'
import InfoContainer from './InfoLower/InfoLowerContainer'

const Info = (props) => {
  let [editMode, setEditMode] = useState(false)
  useEffect(() => {

  }, [editMode])

  const reload = () => {
    if (!editMode) {
      setEditMode(true)
    }
  }

  if (editMode) {
    setTimeout(() => {
      setEditMode(false)
    }, 950);
  }

  return (
    <div className={styles.info}>
      <div className={styles.head}>
        <div className={styles.container}>
          <div className={styles.navigation}>
            <NavLink to='/home' className={styles.leftLink}>
              <i className="ri-arrow-left-s-line"></i>
            </NavLink>
            <div className={styles.city}>{props.city}</div>
            <i className="ri-more-fill"></i>
          </div>
          <div className={styles.weather}>
            <div className={styles.date}>{props.arrOfDays[props.day]}, {props.date} {props.arrOfMonths[props.month]} {props.year} - {props.hours}:{props.addNum(props.minutes)}</div>
            <div className={styles.img}>
              <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="" />
            </div>
            <div className={styles.temperature}>{props.temperature}º C</div>
            <div className={styles.description}>{props.description}</div>
            <div className={styles.update}>
              Обновление: {props.hours}:{props.addNum(props.minutes)}
              {
                !editMode
                  ? <img className={styles.reload} src={reloadStatic} onClick={() => reload()} alt="" />
                  : <img className={styles.reload} src={reloadAnimated} onClick={() => reload()} alt="" />
              }
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.title__black}>Погода</div>
        <SwiperItems predicts={props.predicts[Number(props.router.params.list) - 1]} />
      </div>
      <InfoContainer predicts={props.predicts[Number(props.router.params.list) - 1]} list={Number(props.router.params.list) - 1} />
    </div>
  )
}

export default Info