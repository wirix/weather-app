import preloader from './../../assets/Preloader.svg'
import styles from './Preloader.module.css'
const Preloader = (props) => {
  return (
    <div className={styles.img}>
      <img src={preloader} alt="" />
    </div>
  )
}

export default Preloader