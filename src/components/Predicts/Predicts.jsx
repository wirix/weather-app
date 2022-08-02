import styles from './Predicts.module.css'
import icon from './../../assets/weather-icons/night_storm.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Preloader from '../Preloader/Preloader';

const Predicts = (props) => {
  if (props.predicts === null) {
    return <Preloader />
  }
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
 
  let predictsToday = props.predicts.filter(p => new Date().getDate() === new Date(p.dt_txt).getDate())
  return (
    <div className={styles.predicts}>
      <h3 className={styles.title}>На сегодня:</h3>
        {
          props.predicts.length
            ? 
            <Swiper 
              className={styles.content}
              slidesPerView={4}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}>
                {
                  predictsToday.map(p => (
                    <SwiperSlide className={styles.item} key={p.dt_txt}>
                      <img src={icon} alt="" />
                      <div className={styles.temperature}>{integer(p.main.temp)}º</div>
                      <div className={styles.time}>{intHour(p.dt_txt)}</div>
                    </SwiperSlide>
                  ))
                }
            </Swiper>
          : null
        }
    </div>
  )
}

export default Predicts