import styles from './Predicts.module.css'
import Preloader from '../Preloader/Preloader';
import PredictsItemContainer from './PredictsItem/PredictsItemContainer';
//  sortedPredicts.map(s => {
// debugger
// const date = new Date(`${s.dt_txt}`).getDate()
//         })
const Predicts = (props) => {
  if (props.predicts === null) {
    return <Preloader />
  }
  let sortedPredicts = []
  for (let i = 0; i < (props.predicts.length / 8); i++) {
    sortedPredicts = [...sortedPredicts, props.predicts.filter(p => new Date().getDate() + i === new Date(p.dt_txt).getDate())]
  }

  return (
    <div className={styles.predicts}>
      {
        sortedPredicts.map(s => (
          <>
            <PredictsItemContainer key={s[0].dt} predicts={s} />
          </>
        ))
      }
    </div>
  )
}

export default Predicts