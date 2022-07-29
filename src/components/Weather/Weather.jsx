import styles from './Weather.module.css'
import stormImg from './../../assets/weather-icons/night_storm.png'

const Weather = (props) => {
  return (
    <div className={styles.weather}>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.day}>Senin, 20 Desember 2021</div>
          <div className={styles.time}>10.30 PM</div>
        </div>
        <div className={styles.current__data}>
          <img alt='' src={stormImg} />
          <div className={styles.data}>
            <div className={styles.temperature}>18º C</div>
            <div className={styles.city}>Krasnoyarsk</div>
          </div>
        </div>
        <div className={styles.update}>
          Terakhir update 8.00 PM
          <i className="ri-restart-line"></i>
        </div>
      </div>
    </div>
  )
}

export default Weather