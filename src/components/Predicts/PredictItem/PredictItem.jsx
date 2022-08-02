import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import styles from './PredictItem.module.css'
import icon from './../../../assets/weather-icons/night_storm.png'

const PredictItem = (props) => {
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

  return (
    <SwiperSlide className={styles.item} key={props.dt_txt}>
      <img src={icon} alt="" />
      <div className={styles.temperature}>{integer(props.temp)}º</div>
      <div className={styles.time}>{intHour(props.dt_txt)}</div>
    </SwiperSlide>
  )
}

export default PredictItem