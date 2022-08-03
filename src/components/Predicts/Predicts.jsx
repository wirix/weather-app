import styles from './Predicts.module.css'
import Preloader from '../Preloader/Preloader';
import PredictsToday from './PredictsToday/PredictsToday';
//  sortedPredicts.map(s => {
// debugger
// const date = new Date(`${s.dt_txt}`).getDate()
//         })
const Predicts = (props) => {
  if (props.predicts === null) {
    return <Preloader />
  }
  let sortedPredicts = []
  let sortedDays = []
  for (let i = 0; i < (props.predicts.length / 8); i++) {
    sortedPredicts = [...sortedPredicts, props.predicts.filter(p => new Date().getDate() + i === new Date(p.dt_txt).getDate())]
    if (sortedPredicts.length !== 0) {
      sortedDays = [...sortedDays, sortedPredicts[i][0].dt_txt]
    }
    console.log(sortedPredicts)
    console.log(sortedDays)
  }
  
  return (
    <div className={styles.predicts}>
      {
        sortedPredicts.map(s => (
          <>
            <div className={styles.title}>{new Date(sortedDays[0]).getDate()}.0{new Date(sortedDays[0]).getMonth()}</div>
            <PredictsToday predicts={s} />
          </>
        ))
      }
    </div>
  )
}

export default Predicts