import styles from './SwiperItems.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const SwiperItems = (props) => {
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
  )
}

export default SwiperItems