import styles from './PredictsItem.module.css'
import { NavLink } from 'react-router-dom'

const PredictsItem = (props) => {
  let predictDate = new Date(props.predicts[0].dt_txt).getDate() /// for array(left side) and find numPage
  let predictMonth = new Date(props.predicts[0].dt_txt).getMonth() + 1

  const setTemperature = (arr, modeTemp, typeTemp) => {
    let arrTemperature = []
    for (let i = 0; i < arr.length; i++) {
      arrTemperature = [...arrTemperature, arr[i].main[typeTemp]]
    }
    let temperature = Math.round(modeTemp.apply(null, arrTemperature))
    if (temperature > 0) {
      return `+${temperature}`
    } else {
      return temperature
    }
  }

  const getWeekDay = (date) => {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
    return days[date]
  }

  const setDate = (month, day) => {
    let predictDay = new Date(props.predicts[0].dt_txt).getDay() /// for day(right side)
    let date = new Date().getDate()
    if (day === date && day >= 10) {
      return `Сегодня ${month}.${day}`
    } else if (day === date && day < 10) {
      return `Сегодня ${month}.0${day}`
    } else if (day === date + 1 && day >= 10) {
      return `Завтра ${month}.${day}`
    } else if (day === date + 1 && day < 10) {
      return `Завтра ${month}.0${day}`
    } else if (day < 10) {
      return `${getWeekDay(predictDay)} ${month}.0${day}`
    } else {
      return `${getWeekDay(predictDay)} ${month}.${day}`
    }
  }

  let currentDate = new Date().getDate()

  let list = predictDate - currentDate + 1

  return (
    <div className={styles.container}>
      <NavLink to={`/info/${list}`}>
        <div className={styles.info}>
          <span className={styles.title}>{setDate(predictMonth, predictDate)}</span>
          <div className={styles.info__temp}>
            <span className={styles.max__temp}>{setTemperature(props.predicts, Math.max, 'temp_max')}º</span>
            <span className={styles.slash}> / </span>
            <span className={styles.min__temp}>{setTemperature(props.predicts, Math.min, 'temp_min')}º</span>
          </div>
          <i className="ri-arrow-right-s-line"></i>
        </div>
      </NavLink>
      {/* <SwiperItem predicts={props.predicts} /> */}
    </div>
    
  )
}

export default PredictsItem