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

  let arrOfMonths = ['Январь', 'февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
  let arrOfDays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
  
  let newDate = new Date()
  let year = newDate.getFullYear()
  let month = newDate.getMonth()
  let date = newDate.getDate()
  let day = newDate.getDay()
  let hours = newDate.getHours()
  let minutes = newDate.getMinutes()

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
        <div className={styles.day}>{arrOfDays[day]}, {date} {arrOfMonths[month]} {year}</div>
        <div className={styles.time}>{hours}:{minutes}</div>
      </div>
      <div className={styles.current__data}>
        <img alt='' src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} />
        <div className={styles.data}>
          <div className={styles.temperature}>{integer(props.temperature)}º C</div>
          <div className={styles.city}>{props.city}</div>
        </div>
      </div>
      <div className={styles.update}>
        Обновление: {hours}:{minutes} 
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