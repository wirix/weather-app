import styles from './Info.module.css'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import reloadStatic from '../../assets/ReloadStatic.svg'
import reloadAnimated from '../../assets/ReloadAnimated.svg'
import SwiperItems from '../Predicts/PredictsItem/SwiperItems/SwiperItems'

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

  const addNum = (num) => {
    if (num > 10) {
      return num
    } else {
      return `0${num}`
    }
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

  let sortedPredicts = []
  for (let i = 0; i < (props.predicts.length / 8); i++) {
    sortedPredicts = [...sortedPredicts, props.predicts.filter(p => new Date().getDate() + i === new Date(p.dt_txt).getDate())]
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
            <div className={styles.date}>{arrOfDays[day]}, {date} {arrOfMonths[month]} {year} - {hours}:{addNum(minutes)}</div>
            <div className={styles.img}>
              <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="" />
            </div>
            <div className={styles.temperature}>{props.temperature}º C</div>
            <div className={styles.description}>{props.description}</div>
            <div className={styles.update}>
              Обновление: {hours}:{addNum(minutes)}
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
        <SwiperItems predicts={sortedPredicts[0]} />
      </div>
      <div className={styles.container}>
        <div className={styles.title__black}>Информация</div>
        <SwiperItems predicts={sortedPredicts[0]} />
      </div>
    </div>
  )
}

export default Info