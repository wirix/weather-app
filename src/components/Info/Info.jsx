import styles from './Info.module.css'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import reloadStatic from '../../assets/ReloadStatic.svg'
import reloadAnimated from '../../assets/ReloadAnimated.svg'
import SwiperItems from '../Predicts/PredictsItem/SwiperItems/SwiperItems'
import blazeLine from '../../assets/weather-icons/blaze-line.jpg'
import mistLine from '../../assets/weather-icons/mist-line.jpg'
import hazeLine from '../../assets/weather-icons/haze-2-line.jpg'
import windyLine from '../../assets/weather-icons/windy-line.jpg'

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
    if (num >= 10) {
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
        <SwiperItems predicts={sortedPredicts[Number(props.router.params.list) - 1]} />
      </div>
      <div className={styles.container}>
        <div className={styles.blocks}>
          <div className={styles.title__black}>Информация</div>
          <div className={styles.items}>
            <div className={styles.item__big}>
              <div className={styles.count__big}>
                {props.aqi} 
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
                    <div className={styles.font__item__title}>{props.clouds}%</div>
                  </div>
                  <div className={styles.item__text}>Облачность</div>
                </div>
              </div>
              <div className={styles.item}>
                <img className={styles.img} src={hazeLine} alt="" />
                <div className={styles.item__content}>
                  <div className={styles.item__title}>
                    <div className={styles.font__item__title}>{props.pressure} гПа</div>
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
                    <div className={styles.font__item__title}>{props.wind} км/ч</div>
                  </div>
                  <div className={styles.item__text}>Ветер</div>
                </div>
              </div>
              <div className={styles.item}>
                <img className={styles.img} src={mistLine} alt="" />
                <div className={styles.item__content}>
                  <div className={styles.item__title}>
                    <div className={styles.font__item__title}>{props.humidity}%</div>
                  </div>
                  <div className={styles.item__text}>Влажность</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info