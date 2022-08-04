import styles from './PredictsItem.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const PredictsItem = (props) => {
  const integer = (num) => {
    return num.toFixed(0)
  }
  const intHour = (hour) => {
    const intHour = new Date(`${hour}`).getHours()
    if (intHour > 12) {
      return `${intHour - 12}:00 PM`
    } else if (intHour === 12) {
      return `${intHour}:00 PM`
    } else {
      return `${intHour}:00 AM`
    }
  }
  let predictDate = new Date(props.predicts[0].dt_txt).getDate() /// for array(left side)
  let predictMonth = new Date(props.predicts[0].dt_txt).getMonth() + 1

  const setMaxTemperature = (arr) => {
    let arrMaxTemperature = []
    for (let i = 0; i < arr.length; i++) {
      arrMaxTemperature = [...arrMaxTemperature, arr[i].main.temp_max]
    }
    let maxTemperature = Math.round(Math.max.apply(null, arrMaxTemperature))
    if (maxTemperature > 0) {
      return `+${maxTemperature}`
    } else {
      return maxTemperature
    }
  }
  const setMinTemperature = (arr) => {
    let arrMinTemperature = []
    for (let i = 0; i < arr.length; i++) {
      arrMinTemperature = [...arrMinTemperature, arr[i].main.temp_min]
    }
    let minTemperature = Math.round(Math.min.apply(null, arrMinTemperature))
    if (minTemperature > 0) {
      return `+${minTemperature}`
    } else {
      return minTemperature
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

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <span className={styles.title}>{setDate(predictMonth, predictDate)}</span>
        <span className={styles.info__temp}>
          <span className={styles.max__temp}>{setMaxTemperature(props.predicts)}º</span>
          <span className={styles.slash}> / </span>
          <span className={styles.min__temp}>{setMinTemperature(props.predicts)}º</span>
        </span>
        <span className={styles.arrow__right}><i className="ri-arrow-right-s-line"></i></span>
      </div>
      <Swiper
          className={styles.content}
          slidesPerView={4}
          spaceBetween={10}
          pagination={{
            clickable: true,
        }}>
        {
          props.predicts.map(p => (
            <SwiperSlide className={styles.item} key={p.dt_txt}>
              <img src={`http://openweathermap.org/img/wn/${p.weather[0].icon}@2x.png`} alt="" />
              <div className={styles.temperature}>{integer(p.main.temp)}º</div>
              <div className={styles.time}>{intHour(p.dt_txt)}</div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
    
  )
}

export default PredictsItem