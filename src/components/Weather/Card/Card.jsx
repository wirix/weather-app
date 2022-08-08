import { useEffect, useState } from 'react'
import styles from './Card.module.css'
import reloadStatic from '../../../assets/ReloadStatic.svg'
import reloadAnimated from '../../../assets/ReloadAnimated.svg'

const Card = (props) => {
  let [editMode, setEditMode] = useState(false)
  useEffect(() => {

  }, [editMode])

  const integer = (num) => {
    return num.toFixed(0)
  }
  
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
    <div className={styles.content}>
      <div className={styles.info}>
        <div className={styles.day}>{props.arrOfDays[props.day]}, {props.date} {props.arrOfMonths[props.month]} {props.year}</div>
        <div className={styles.time}>{props.hours}:{props.addNum(props.minutes)}</div>
      </div>
      <div className={styles.current__data}>
        <img alt='' src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} />
        <div className={styles.data}>
          <div className={styles.temperature}>{integer(props.temperature)}º C</div>
          <div className={styles.description}>{props.description}</div>
        </div>
      </div>
      <div className={styles.update}>
        Обновление: {props.hours}:{props.addNum(props.minutes)} 
        {
          !editMode
            ? <img className={styles.reload} src={reloadStatic} onClick={() => reload()} alt="" />
            : <img className={styles.reload} src={reloadAnimated} onClick={() => reload()} alt="" />
        }
      </div>
    </div>
  )
}

export default Card