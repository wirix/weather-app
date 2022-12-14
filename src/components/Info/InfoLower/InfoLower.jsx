import styles from './InfoLower.module.css'
import blazeLine from '../../../assets/weather-icons/blaze-line.jpg'
import mistLine from '../../../assets/weather-icons/mist-line.jpg'
import hazeLine from '../../../assets/weather-icons/haze-2-line.jpg'
import windyLine from '../../../assets/weather-icons/windy-line.jpg'
import { useNavigate } from 'react-router-dom'

const InfoLower = (props) => {
  let navigate = useNavigate()

  let predicts = props.predicts[0]

  let aqiForecast
  if (props.dayOfLink - new Date().getDate() === 0) {
    let countOfIndex = props.hourOfLink - new Date().getHours()
    aqiForecast = props.aqiForecast[0][countOfIndex]
  } else {
    aqiForecast = props.aqiForecast[props.dayOfLink - new Date().getDate()][props.hourOfLink]
  }

  if (new Date().getDate() !== props.dayOfLink) {
    if (props.hourOfLink === 0) {
      predicts = props.predicts[0]
    } else {
      predicts = props.predicts[props.hourOfLink / 3]
    }
  } 

  switch(props.predicts.length) {
    case 7: 
      predicts = props.predicts[props.hourOfLink / 3 - 1]
      break
    case 6:
      predicts = props.predicts[props.hourOfLink / 3 - 2]
      break
    case 5:
      predicts = props.predicts[props.hourOfLink / 3 - 3]
      break
    case 4:
      predicts = props.predicts[props.hourOfLink / 3 - 4]
      break
    case 3:
      predicts = props.predicts[props.hourOfLink / 3 - 5]
      break
    case 2:
      predicts = props.predicts[props.hourOfLink / 3 - 6]
      break
    case 1:
      predicts = props.predicts[props.hourOfLink / 3 - 7]
      break
    default:
      break
  }

  return (
    <div className={styles.container}>
      <div className={styles.blocks}>
        <div className={styles.title__black}> <i onClick={() => navigate('')} className="ri-arrow-left-s-line"></i>Информация</div>
        <div className={styles.items}>
          <div className={styles.item__big}>
            <div className={styles.count__big}>
              {aqiForecast.main.aqi}
              <div className={styles.fontText}> / </div> 5
            </div>
            <div className={styles.item__description}>
              <div className={styles.item__big__title}>ИКВ - очень хорошо</div>
              <div className={styles.item__big__text}>
                В настоящее время качество воздуха в вашем районе очень хорошее.
              </div>
            </div>
          </div>
          <div className={styles.double__item}>
            <div className={styles.item}>
              <img className={styles.img} src={blazeLine} alt="" />
              <div className={styles.item__content}>
                <div className={styles.item__title}>
                  <div className={styles.font__item__title}>{predicts.clouds.all}%</div>
                </div>
                <div className={styles.item__text}>Облачность</div>
              </div>
            </div>
            <div className={styles.item}>
              <img className={styles.img} src={hazeLine} alt="" />
              <div className={styles.item__content}>
                <div className={styles.item__title}>
                  <div className={styles.font__item__title}>{predicts.main.pressure} гПа</div>
                </div>
                <div className={styles.item__text}>Давление</div>
              </div>
            </div>
          </div>
          <div className={styles.double__item}>
            <div className={styles.item}>
              <img className={styles.img} src={windyLine} alt="" />
              <div className={styles.item__content}>
                <div className={styles.item__title}>
                  <div className={styles.font__item__title}>{predicts.wind.speed} км/ч</div>
                </div>
                <div className={styles.item__text}>Ветер</div>
              </div>
            </div>
            <div className={styles.item}>
              <img className={styles.img} src={mistLine} alt="" />
              <div className={styles.item__content}>
                <div className={styles.item__title}>
                  <div className={styles.font__item__title}>{predicts.main.humidity}%</div>
                </div>
                <div className={styles.item__text}>Влажность</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoLower